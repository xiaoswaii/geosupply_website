<template>
  <swiper :options="swiperOption">
        <swiper-slide><img class="swiper_img" src="../assets/img/005.jpg" alt="捷貿儀器工程有限公司，捷貿"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/006.jpg" alt="捷貿儀器工程有限公司，捷貿"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/002.jpg" alt="捷貿儀器工程有限公司，捷貿"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/003.jpg" alt="捷貿儀器工程有限公司，捷貿"></swiper-slide>
        <swiper-slide><img class="swiper_img" src="../assets/img/001.jpg" alt="捷貿儀器工程有限公司，捷貿"></swiper-slide>
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
  height: 335px;
  overflow-x: hidden;
}

.swiper_img {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
}

@media (min-width: 320px) and (max-width: 480px) {
  .swiper-container {
    height: 160px;
  }
}
</style>