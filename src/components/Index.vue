<template>
  <div class="index">
    <Carousel></Carousel>
    <div class="index_banner">
      <div class="index_banner_word">
          Home
      </div>
    </div>
      <div class="aboutus_index">
          <div class="aboutus_left"><img src="../assets/img/aboutus_index.jpg"></div>
          <div class="aboutus_right" data-aos="fade-in">
            <span class="triangle"></span>
            <span class="aboutus_right_title">Company</span>
            <span class="aboutus_content_index">Ever since Geosupply is established, it has been providing domestic and international automated monitoring system and engineering services in high‐speed rail, MRT, toll road, civil and geotechnical construction field. 
              The company's colleagues have more than 15 years of monitoring experience.
              <br>
              <br>
              Geosupply Cloud Platform (GeoSupply Real Time Monitoring Cloud Platform) has been implemented in several mega public work project, 
              in both domestic and international. </span>
            <span class="triangle_flip"></span>
          </div>
      </div>
      <div class="product_index" data-aos="fade-in" data-aos-delay="50"
    data-aos-duration="1000">
        <div class="product_index_title">Product</div>
        <div class="product_index_content">
          <div class="product_index_img"><img src="/product/09_In-Place Inclinometer.jpg"><div class="inner_product">Sensor</div></div>
          <div class="product_index_img"><img src="/product/13_Datalogger.jpg"><div class="inner_product">Datalogger</div></div>
          <div class="product_index_img"><img src="/product/14_Wireless Node.jpg"><div class="inner_product">Wireless Node</div></div>
          <div class="product_index_img"><img src="../assets/img/product/17_CloudSoftware.jpg"><div class="inner_product">Software</div></div>
        </div>
      </div>
      <div class="service_index" data-aos="fade-left" data-aos-delay="50"
    data-aos-duration="1000">
          <div class="service_left">
            <span class="service_title">Service Provided</span>
            <br>
            <br>
            <div class="service_special">
            <i class="fa fa-check-circle"></i><p>Instrumentation Monitoring System<br>
<span>(MRT, High Speed Railway, Bridges, Dams, Slope, Embankments, Excavation, Land Fills, Ground Water, Mines, Pipelines, Tunnels and Wind Turbines)</span></p>  
            </div>
            <div :key="service" v-for="service in services" class="service_list">
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
        <span class="project_index_title">Our Project</span>
        <div class="project_index_content">
          <div class="project_index_img" id="project_taiwan" @click="goProject('Taiwan')"><img src="../assets/img/taiwan.jpg"><div class="inner">Taiwan</div></div>
          <div class="project_index_img" id="project_malaysia" @click="goProject('Malaysia')"><img src="../assets/img/malaysia.jpg"><div class="inner">Malaysia</div></div>
          <div class="project_index_img" id="project_indonesia" @click="goProject('Indonesia')"><img src="../assets/img/indonesia.jpg"><div class="inner">Indonesia</div></div>
        </div>
        <span class="read_more"><a href="./project">Read more</a></span>
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
        services: ['Noise Monitoring',
                    'Earthquake Monitoring',
                    'Fiber Optic(FBG) Real Time Monitoring System', 
                    'Web‐based Cloud‐based RTMS',
                    'Display and Analysis Software']
      };
    },
    methods: {
      goProject (location) {
        document.location.href=`/Project?country=${location}`
      }
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/index.scss";
  @import "../assets/scss/index_mobile.scss";
</style>