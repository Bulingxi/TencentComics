import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
//index轮播
import router from './js/router.js'
import Mint from 'mint-ui'
//import $ from 'jquery'

Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css'
import './assets/css/animate.css'

import axios from 'axios'
Vue.prototype.$http = axios



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
