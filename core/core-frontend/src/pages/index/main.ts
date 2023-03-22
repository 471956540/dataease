import { createApp } from 'vue'
import '@/style.less'
import '@/plugins/svg-icon'
import 'normalize.css/normalize.css'
import App from './App.vue'
import { setupI18n } from '@/plugins/vue-i18n'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupElementPlus } from '@/plugins/element-plus'

import '@/permission'
const setupAll = async () => {
  const app = createApp(App)
  await setupI18n(app)
  setupStore(app)
  setupRouter(app)
  setupElementPlus(app)
  app.mount('#app')
}

setupAll()
