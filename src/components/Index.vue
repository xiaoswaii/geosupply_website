<template>
  <div class="index">
    <Carousel></Carousel>
    <div class="index_banner">
      <div class="index_banner_word">
          Home
      </div>
    </div>
      <div class="aboutus_index">
          <div class="aboutus_left"><img src="../assets/img/burning.jpg"></div>
          <div class="aboutus_right" data-aos="fade-in">
            <span class="triangle"></span>
            <span class="aboutus_right_title">About Us</span>
            <span class="aboutus_content">Ever since Geosupply is established, it has been providing domestic and international automated monitoring system and engineering services in high‐speed rail, MRT, toll road, civil and geotechnical construction field. 
              The company's colleagues have more than 15 years of monitoring experience.
              <br>
              <br>
              Geosupply Cloud Platform (GeoSupply Real Time Monitoring Cloud Platform) has been implemented in several mega public work project, 
              in both domestic and international. </span>
            <span class="triangle_flip"></span>
          </div>
      </div>
      <br>
      <div class="product_index" data-aos="fade-in" data-aos-delay="50"
    data-aos-duration="1000">
        <div class="product_index_title">Product</div>
        <div class="product_index_content"></div>
      </div>
      <br>
      <div class="service_index" data-aos="fade-left" data-aos-delay="50"
    data-aos-duration="1000">
          <div class="service_left">
            <span class="service_title">Service Provided</span>
            <br>
            <div :key="service" v-for="service in services" class="service_list">
            <i class="fa fa-check-circle"></i>{{ service }}<br><br>
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
          <div class="project_index_img"><img src="../assets/img/malaysia.jpg"><div class="inner">Malaysia</div></div>
          <div class="project_index_img"><img src="../assets/img/indo.jpg"><div class="inner">Indonesia</div></div>
          <div class="project_index_img"><img src="../assets/img/taiwan.jpg"><div class="inner">Taiwan</div></div>
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
        services: ['Instrumentation Monitoring System(MRT, High Speed Railway, Bridges, Dams, Slope, Embankments, Excavation, Land Fills, Ground Water, Mines, Pipelines, Tunnels and Wind Turbines)',
                    'Noise Monitoring',
                    'Earthquake Monitoring',
                    'Fiber Optic Real Time Monitoring System', 
                    'Web‐based Cloud‐based RTMS',
                    'Display and Analysis Software']
      };
    },
  };
</script>

<style lang="scss">
  .index {
    height: 240%;
    width: 100%;
  }

  .index_banner {
    height: 2%;
    width: 100%;
    background-color: #006699;
  }

  .index_banner_word {
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1em;
    font-family: "RobotoCondensedBold";
    position: relative;
    margin-left: 1%;
    font-weight: bold;
    color: white;
  }

  .triangle {
    display: block;
    height: 0.1%;
    width: 0.1%;
    border-top: 20px solid grey;
    border-right: 20px solid transparent;
  }

  .triangle_flip {
    display: block;
    float: right;
    height: 0.1%;
    width: 0.1%;
    border-bottom: 20px solid grey;
    border-left: 20px solid transparent;
  }

  .aboutus_index {
      margin-top: 2%;
      display: block;
      height: 18%;
      width: 100%;
  }

  .aboutus_left {
      display: block;
      float: left;
      height: 100%;
      width: 50%;
      /* background: url("../assets/img/burning.jpg") no-repeat center center fixed;
      background-size: cover;  */
  }

  .aboutus_left img{
    max-height: 100%;
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  .aboutus_right {
      display: block;
      float: right;
      height: 100%;
      width: 49%;
      //margin: 0 auto;
  }

  .aboutus_left_img {
    max-width: 100%;
    max-height: 100%;
  }

  .aboutus_right_title {
    text-decoration: underline;
    text-decoration-color: grey;
    margin-top: 2%;
    display: block;
    font-size: 2em;
    height: 18%;
    width: 100%;
  }

  .aboutus_content {
    display: block;
    /* border-bottom: 1px solid black; */
    font-size: 1.2em;
    height: 65%;
    width: 100%;
  }

  .product_index {
    background-color: #f4f4f4;
    height: 23%;
    width: 100%;
    display: block;
    font-size: 2em;
  }

  .product_index_title {
    height: 10%;
    width: 100%;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: grey;
  }
  .service_index {
      display: block;
      height: 15%;
      width: 100%;
  }

  .service_left {
      display: block;
      float: left;
      height: 100%;
      width: 50%;
  }

  .service_right {
      display: block;
      float: left;
      height: 100%;
      width: 50%;

      img {
        max-width: 100%;
        max-height: 100%;
      }
  }

  .service_title {
    font-size: 2em;
    text-decoration: underline;
    text-decoration-color: grey;
  }

  .service_list {
    font-size: 1.1em;

    .fa{
      color: #006699;
    }
  }

  .project_index {
    background-color: #f4f4f4;
    display: block;
    margin-top: 1%;
    height: 20%;
    width: 100%;

    .project_index_title {
      display: block;
      height: 15%;
      width: 100%;
      text-align: center;
      font-size: 2em;
      text-decoration: underline;
      text-decoration-color: grey; 
    }

    .project_index_content {
      height: 60%;
      width: 75%;
      display: flex;
      margin:0 auto;
      justify-content: space-around;

      .project_index_img {
        position: relative;
        width: 30%;
        height: 95%;
        margin-top: 1.5%;
        
        color: white;
        text-align: center;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .inner {
        position: absolute;
        height: 50px;
        bottom: 0;
        z-index: 2;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        font-size: 2.5em;
      }
    }

      .read_more {
        display: block;
        margin: 0 auto;
        margin-top: 2%;
        color: white;
        text-align: center;
        line-height: 200%;
        font-size: 1.2em;
        cursor: pointer;
        height: 10%;
        width: 10%;
        background-color: #006699;

        a {
          text-decoration: none;
          color: white;
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .read_more:hover {
        background-color: #6db8d8;
      }
  }
</style>