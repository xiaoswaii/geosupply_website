<template>
  <div class="index">
    <Carousel></Carousel>
    <div class="index_banner">
      <div class="index_banner_word">
          {{$t('banner.home')}}
      </div>
    </div>
      <div class="aboutus_index">
          <div class="aboutus_left"><img src="../assets/img/aboutus_index.jpg"></div>
          <div class="aboutus_right" data-aos="fade-in">
            <span class="triangle"></span>
            <span class="aboutus_right_title">{{$t('index.about.title')}}</span>
            <span class="aboutus_content_index">{{$t('index.about.content1')}}
              <br>
              <br>
              {{$t('index.about.content2')}}
               </span>
            <span class="triangle_flip"></span>
          </div>
      </div>
      <div class="product_index">
        <div class="product_index_title">{{$t('index.product.title')}}</div>
        <div class="product_index_content">
          <div class="product_index_img"><img src="/product/09_In-Place Inclinometer.jpg"><div class="inner_product">{{$t('index.product.product1')}}</div></div>
          <div class="product_index_img"><img src="/product/13_Datalogger.jpg"><div class="inner_product">{{$t('index.product.product2')}}</div></div>
          <div class="product_index_img"><img src="/product/14_Wireless Node.jpg"><div class="inner_product">{{$t('index.product.product3')}}</div></div>
          <div class="product_index_img"><img src="../assets/img/product/17_CloudSoftware.jpg"><div class="inner_product">{{$t('index.product.product4')}}</div></div>
        </div>
      </div>
      <div class="service_index" data-aos="fade-left" data-aos-delay="50"
    data-aos-duration="1000">
          <div class="service_left">
            <span class="service_title">{{$t('index.service.title')}}</span>
            <br>
            <br>
            <div class="service_special">
            <i class="fa fa-check-circle"></i><p>{{$t('index.service.instrutmentTitle')}}<br>
<span>{{$t('index.service.instrumentContent')}}</span></p>  
            </div>
            <div :key="service" v-for="service of $t('index.service.services')" class="service_list">
            <i class="fa fa-check-circle"></i>
            <div class="service_list_word">{{ service }}</div>
            <br>
            </div>
          </div>
          <div class="service_right">
            <img src="../assets/img/service.jpg">
          </div>
      </div>
      <div class="project_index" data-aos="fade-up" data-aos-delay="100"
    data-aos-duration="1000">
        <span class="project_index_title">{{ $t('index.project.title') }}</span>
        <div class="project_index_content">
          <div class="project_index_img" id="project_taiwan" @click="goProject('Taiwan')"><img src="../assets/img/taiwan.jpg"><div class="inner">{{ $t('index.project.taiwan') }}</div></div>
          <div class="project_index_img" id="project_malaysia" @click="goProject('Malaysia')"><img src="../assets/img/malaysia.jpg"><div class="inner">{{ $t('index.project.malaysia') }}</div></div>
          <div class="project_index_img" id="project_indonesia" @click="goProject('Indonesia')"><img src="../assets/img/indonesia.jpg"><div class="inner">{{ $t('index.project.indonesia') }}</div></div>
        </div>
        <span class="read_more"><a id="readmore" @click="readmore()">{{ $t('index.project.read') }}</a></span>
      </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';
  export default {
    name: 'Index',
    components: {
      Carousel
  },
    data() {
      return {
      };
    },
    methods: {
      goProject (location) {
        document.location.href=`/Project?country=${location}`
      },

      readmore() {
        document.location.href=`/Project`
      }
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/index.scss";
  @import "../assets/scss/mobile/index_mobile.scss";
</style>