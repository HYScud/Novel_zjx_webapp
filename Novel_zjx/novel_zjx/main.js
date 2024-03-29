import App from './App'

// #ifndef VUE3
import Vue from 'vue'
/* 引入uview */
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import dLoading from '@/uni_modules/d-loading/components/d-loading/d-loading.vue'
Vue.component('dLoading',dLoading)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif