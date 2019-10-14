import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import Column from '../pages/Column.vue'
import Car from '../pages/car.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
import Error from '../pages/Error.vue'


let routes=[
  {path:'/home',component:Home},
  {path:'/column',component:Column},
  {path:'/car',component:Car},
  {path:'/Login',component:Login},
  {path:'/Reg',component:Reg},
  {path:'/Detail/:id',component:Detail,name:'detail',props:true},
  {path:'/',redirect:'/home'},
  {path:'*',component:Error},

];

export default new VueRouter({routes})