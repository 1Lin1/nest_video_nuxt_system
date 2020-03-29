import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/avue.js'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// 创建axios实例
const http = axios.create({
  baseURL:'http://localhost:3001/api'
})

//请求接口
Vue.prototype.$http = http

//avue管理端请求上传相关
Vue.prototype.$httpajax = http


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
