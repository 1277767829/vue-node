import Vue from 'vue';
import axios from 'axios';
import store from './store';
import * as types from '../store/type'

// 表示前端携带跨源凭证（即允许别人种cookie），如果用模拟服务器端口的方法就不需要了
// axios.defaults.withCredentials=true;

axios.interceptors.request.use(function (config) {
    store.commit(types.VIEW_LOADING,true)
    return config;
  }, function (error) {
    // Do something with request error
   
    return Promise.reject(error);
  });


axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.commit(types.VIEW_LOADING,false)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



Vue.prototype.$axios=axios;
window.axios=axios;
