<template>
<div class="banner">
    <ul>
        <router-link to="/column" tag="li" v-for="value of $store.state.banner" :key="value.id">
            <img :src="server.baseUrl+value.img" alt="">
        </router-link>
      <!-- <li>
        <img src="../assets/img/fly0.jpg" alt="">
      </li>
      <li>
        <img src="../assets/img/fly1.jpg" alt="">
      </li>
      <li>
        <img src="../assets/img/fly2.jpg" alt="">
      </li>
      <li>
        <img src="../assets/img/fly3.jpg" alt="">
      </li>
      <li>
        <img src="../assets/img/fly4.jpg" alt="">
      </li>
      <li>
        <img src="../assets/img/fly5.jpg" alt="">
      </li>
      <li>
        <img src="../assets/img/fly6.jpg" alt="">
      </li>
      <li>
        <img src="../assets/img/fly7.jpg" alt="">
      </li> -->
    </ul>
    <ol>
        <li v-for="value of $store.state.banner" :key="value.id"></li>
      
    </ol>
  </div>
</template>
<script>
import $ from 'jquery';
import Swipe from '../assets/js/swipe.js';

export default {
  updated(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>

<style scoped>
.banner{height:470px;position: relative;overflow: hidden; z-index: 10;width:1200px;margin:0 auto}
.banner ul li{float:left;position: relative;cursor: pointer;}
.banner ul li img{display:block;}
.banner ol{position:absolute; right:0.2rem;bottom:0;right:0;height:40px;}
.banner ol li{width:20px;height:20px; background:#fff; float:left; border-radius:50%; margin:10px;cursor: pointer;}
.banner ol li.active{ background:#c7181d;}

</style>
