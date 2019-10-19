import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'

import router from './plugins/router'

import './plugins/axios'

Vue.prototype.server = require('./config/server');

import store from './plugins/store'

import './filters'

import Magnify from './plugins/magnify'
Vue.use(Magnify)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:require('./assets/img/error.jpg'),
    loading:require('./assets/img/loading.gif')
})

let local = window.localStorage.getItem('user');

if(local){
  store.commit('CHECK_USER',JSON.parse(local))
}


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
