import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'

import router from './plugins/router'

import './plugins/axios'

Vue.prototype.server = require('./config/server');

import store from './plugins/store'

import './filters'

let local = window.localStorage.getItem('user');

if(local){
  store.commit('CHECK_USER',JSON.parse(local))
}

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
