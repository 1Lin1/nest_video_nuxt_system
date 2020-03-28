import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/avue.js'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// 创建axios实例
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
