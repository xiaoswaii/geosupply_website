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
//import Carousel from './components/Carousel.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    //Carousel
  },

  data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
}
</script>

<style>
@import "./assets/scss/app.scss";
</style>
