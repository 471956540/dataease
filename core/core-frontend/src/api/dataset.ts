import request from '@/config/axios'
export interface DatesetOrFolder {
  name: string
  id?: number | string
  pid?: number | string
  nodeType: 'folder' | 'dataset'
}

export interface Table {
  datasourceId: string
  name: string
  tableName: string
  type: string
  unableCheck?: boolean
}
// 获取权限路
export const saveDatasetTree = async (data: DatesetOrFolder): Promise<IResponse> => {
  return request.post({ url: '/datasetTree/save', data }).then(res => {
    return res?.data
  })
}

export const getDatasetTree = async (data = {}): Promise<IResponse> => {
  return request.post({ url: '/datasetTree/tree', data }).then(res => {
    return res?.data
  })
}

export const delDatasetTree = async (id): Promise<IResponse> => {
  return request.post({ url: `/datasetTree/delete/${id}`, data: {} }).then(res => {
    return res?.data
  })
}

export const getDatasourceList = async (): Promise<IResponse> => {
  return request.post({ url: '/datasource/list', data: {} }).then(res => {
    return res?.data
  })
}

export const getTables = async (id): Promise<IResponse> => {
  return request.post({ url: `/datasource/getTables/${id}`, data: {} }).then(res => {
    return res?.data as Table[]
  })
}

export const getTableField = async (data): Promise<IResponse> => {
  return request.post({ url: '/datasetData/tableField', data }).then(res => {
    return res?.data
  })
}

export const getPreviewData = async (data): Promise<IResponse> => {
  return request.post({ url: '/datasetData/previewData', data }).then(res => {
    return res?.data
  })
}
