<template>
  <div id="app">
    <Header></Header>
    <Loading v-show="$store.state.loading"></Loading>
    <keep-alive>
      <router-view v-show="!$store.state.loading"></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loading from './components/loading.vue'

export default {
  name: 'app',
  components: {
     Header,
     Footer,
     Loading
  }
}
</script>

<style>

</style>
