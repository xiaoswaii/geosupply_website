<template>
  <div id="app">
    <Header></Header>
    
    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html{
  height: 100%;
  width: 100%;
}

body{
  height: 100%;
  width: 100%;
  margin: 0px;
}

#app{
  height: 100%;
  width: 100%;
}
</style>
