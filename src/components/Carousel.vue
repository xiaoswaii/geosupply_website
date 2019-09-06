<template>
  <swiper :options="swiperOption">
        <swiper-slide><img class="swiper_img" src="../assets/img/network.jpg"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/container.jpg"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/circuit.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
 export default {
   components: {
    swiper,
    swiperSlide
  },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
.swiper-container {
  height:30%;
}

.swiper_img {
  width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}
</style>