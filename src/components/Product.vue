<template>
<div class="product">
  <div class="product_img"></div>
  <div class="product_banner">
    <div class="product_banner_word">
    PRODUCT
    </div>
  </div>
  <div class="product_main">
    <div :key="product" v-for="product in products" class="product_img_spec" id="product_img_spec" @click="locationContact()">
      <div class="product_img_part">
      <div class="overlay">Contact us for more detail</div>
      <img :src="product.product_img">
      </div>
      <div class="product_img_name">{{product.product_name}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
    products:[{product_name:"Strain Gage",product_img:"/product/01_Strain Gage.jpg"},{product_name:"Rebar Strain Meter",product_img:"/product/02_Rebar Strain Meter.jpg"},{product_name:"Piezometer",product_img:"/product/03_Piezometer.jpg"}
    ,{product_name:"Earth Pressure Cell",product_img:"/product/04_Earth Pressure Cell.jpg"},{product_name:"Concrete Stress Cell (For NATM)",product_img:"/product/05_Concrete Stress Cell (For NATM).jpg"},{product_name:"Load Cell",product_img:"/product/06_Load Cell.jpg"},{product_name:"LVDT for Extensometer",product_img:"/product/07_LVDT for Extensometer.JPG"},
    {product_name:"Inclinometer Casing",product_img:"/product/08_Inclinometer Casing.jpg"},{product_name:"In-Place Inclinometer",product_img:"/product/09_In-Place Inclinometer.jpg"},{product_name:"Beam Sensor",product_img:"/product/10_Beam Sensor.jpg"},{product_name:"Tilt Sensor",product_img:"/product/11_Tilt Sensor.jpg"}
    ,{product_name:"Minilogger",product_img:"/product/12_Minilogger with few Channel.jpg"},{product_name:"Datalogger",product_img:"/product/13_Datalogger.jpg"},{product_name:"Wireless Node",product_img:"/product/14_Wireless Node.jpg"},{product_name:"Wireless Sensor",product_img:"/product/15_Wireless Sensor.jpg"}
    ,{product_name:"Wireless Accelerometer",product_img:"/product/16_Wireless Accelerometer.jpg"}]
    }
  },
  methods: {
      locationContact(){
        document.location.href="/ContactUs";
      }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/product.scss";
</style>
