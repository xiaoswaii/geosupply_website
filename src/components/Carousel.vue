<template>
  <swiper :options="swiperOption">
        <swiper-slide><img class="swiper_img" src="../assets/img/005.jpg"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/006.jpg"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/002.png"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/003.png"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/004.png"></swiper-slide>
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
            delay: 3000,
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
  height:18%;
}

.swiper_img {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
}
</style>