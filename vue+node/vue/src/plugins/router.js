import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue'
const Column = ()=>import('../pages/Column.vue')
const Car = ()=>import('../pages/car.vue')
const Login = ()=>import('../pages/Login.vue')
const Reg = ()=>import('../pages/Reg.vue')
const Detail = ()=>import('../pages/Detail.vue')
const Error = ()=>import('../pages/Error.vue')
// import Column from '../pages/Column.vue'
// import Car from '../pages/car.vue'
// import Login from '../pages/Login.vue'
// import Reg from '../pages/Reg.vue'
// import Detail from '../pages/Detail.vue'
// import Error from '../pages/Error.vue'


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
let scrollBehavior=(to,from,savedPosition)=>{
  return { x: 0, y: 0 }//对于所有路由导航，简单地让页面滚动到顶部
}

export default new VueRouter({
  routes,
  // scrollBehavior
})