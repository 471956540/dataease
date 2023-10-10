import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosHeaders
} from 'axios'
import { tryShowLoading, tryHideLoading } from '@/utils/loading'
import qs from 'qs'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useLinkStoreWithOut } from '@/store/modules/link'
import { config } from './config'
import { configHandler } from './refresh'
type AxiosErrorWidthLoading<T> = T & {
  config: {
    loading?: boolean
  }
}

type InternalAxiosRequestConfigWidthLoading<T> = T & {
  loading?: boolean
}

import { ElMessage, ElMessageBox } from 'element-plus-secondary'
import router from '@/router'
const { result_code } = config
import { useCache } from '@/hooks/web/useCache'
const { wsCache } = useCache()

export const PATH_URL = window.DataEaseBi
  ? window.DataEaseBi?.baseUrl + 'de2api/'
  : import.meta.env.VITE_API_BASEPATH

export interface AxiosInstanceWithLoading extends AxiosInstance {
  <T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D> & { loading?: boolean }
  ): Promise<R>
}
// 创建axios实例
const service: AxiosInstanceWithLoading = axios.create({
  baseURL: PATH_URL, // api 的 base_url
  timeout: config.request_timeout // 请求超时时间
})
const mapping = {
  'zh-CN': 'zh-CN',
  en: 'en_US',
  tw: 'zh_TW'
}
const permissionStore = usePermissionStoreWithOut()
const linkStore = useLinkStoreWithOut()
const CancelToken = axios.CancelToken
const cancelMap = {}

// request拦截器
service.interceptors.request.use(
  async (c: InternalAxiosRequestConfigWidthLoading<InternalAxiosRequestConfig>) => {
    let config = configHandler(c)
    if (config instanceof Promise) {
      config = await config
    }
    if (
      config.method === 'post' &&
      (config.headers as AxiosRequestHeaders)['Content-Type'] ===
        'application/x-www-form-urlencoded'
    ) {
      config.data = qs.stringify(config.data)
    }
    if (window.DataEaseBi?.baseUrl) {
      config.baseURL = window.DataEaseBi.baseUrl + 'de2api/'
    }

    if (linkStore.getLinkToken) {
      ;(config.headers as AxiosRequestHeaders)['X-DE-LINK-TOKEN'] = linkStore.getLinkToken
    } else if (window.DataEaseBi?.token) {
      ;(config.headers as AxiosRequestHeaders)['X-EMBEDDED-TOKEN'] = window.DataEaseBi.token
    }
    if (wsCache.get('user.language')) {
      const key = wsCache.get('user.language')
      const val = mapping[key] || key
      ;(config.headers as AxiosRequestHeaders)['Accept-Language'] = val
    }
    ;(config.headers as AxiosRequestHeaders)['out_auth_platform'] = wsCache.get('out_auth_platform')
      ? wsCache.get('out_auth_platform')
      : 'default'

    if (config.method === 'get' && config.params) {
      let url = config.url as string
      url += '?'
      const keys = Object.keys(config.params)
      for (const key of keys) {
        if (config.params[key] !== void 0 && config.params[key] !== null) {
          url += `${key}=${encodeURIComponent(config.params[key])}&`
        }
      }
      url = url.substring(0, url.length - 1)
      config.params = {}
      config.url = url
    }
    config.cancelToken = new CancelToken(function executor(c) {
      cancelMap[config.url] = c
    })
    config.loading && tryShowLoading(permissionStore.getCurrentPath)
    return config
  },
  (error: AxiosErrorWidthLoading<AxiosError>) => {
    error.config.loading && tryHideLoading(permissionStore.getCurrentPath)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (
    response: AxiosResponse<any> & { config: InternalAxiosRequestConfig & { loading?: boolean } }
  ) => {
    executeVersionHandler(response)
    if (response.headers['x-de-refresh-token']) {
      wsCache.set('user.token', response.headers['x-de-refresh-token'])
      wsCache.set('user.exp', new Date().getTime() + 90000)
    }
    if (response.headers['x-de-link-token']) {
      linkStore.setLinkToken(response.headers['x-de-link-token'])
    }
    response.config.loading && tryHideLoading(permissionStore.getCurrentPath)

    if (response.config.responseType === 'blob') {
      // 如果是文件流，直接过
      return response
    } else if (response.data.code === result_code || response.data.code === 50002) {
      return response.data
    } else if (response.config.url.match(/^\/map\/\d{3}\/\d+\.json$/)) {
      //   TODO 处理静态文件
      return response
    } else {
      if (
        !response?.config?.url.startsWith('/xpackComponent/content') &&
        response?.data?.code !== 60003
      ) {
        ElMessage({
          type: 'error',
          message: response.data.msg,
          showClose: true
        })
      }

      return Promise.reject(response.data.msg)
    }
  },
  (error: AxiosErrorWidthLoading<AxiosError>) => {
    if (!error.config.url.startsWith('/xpackComponent/content')) {
      ElMessage({
        type: 'error',
        message: error.message,
        showClose: true
      })
    }

    error.config.loading && tryHideLoading(permissionStore.getCurrentPath)
    const header = error.response.headers as AxiosHeaders
    if (header.has('DE-GATEWAY-FLAG')) {
      localStorage.clear()
      const flag = header.get('DE-GATEWAY-FLAG')
      localStorage.setItem('DE-GATEWAY-FLAG', flag.toString())
      let queryRedirectPath = '/workbranch/index'
      if (router.currentRoute.value.fullPath) {
        queryRedirectPath = router.currentRoute.value.fullPath as string
      }
      router.push(`/login?redirect=${queryRedirectPath}`)
    }
    if (header.has('DE-FORBIDDEN-FLAG')) {
      ElMessage({
        type: 'error',
        message: header.has('DE-FORBIDDEN-FLAG').toString(),
        showClose: true
      })
    }
    return Promise.reject(error)
  }
)

const executeVersionHandler = (response: AxiosResponse) => {
  const key = 'x-de-execute-version'
  const executeVersion = response.headers[key]
  const cacheVal = wsCache.get(key)
  if (!cacheVal) {
    wsCache.set(key, executeVersion)
    return
  }
  if (executeVersion && executeVersion !== cacheVal) {
    wsCache.set(key, executeVersion)
    ElMessageBox.confirm('系统有升级，请点击刷新页面', {
      confirmButtonType: 'primary',
      type: 'warning',
      confirmButtonText: '刷新',
      cancelButtonText: '取消',
      autofocus: false,
      showClose: false
    }).then(() => {
      window.location.reload()
    })
  }
}
export { service, cancelMap }
