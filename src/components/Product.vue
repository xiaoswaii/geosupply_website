<template>
<div class="product">
  <div class="product_img"></div>
  <div class="product_banner">
    <div class="product_banner_word">
    PRODUCT
    </div>
  </div>
  <div class="product_main">
    <div :key="product" v-for="product in products_img" class="product_img_spec">
      <div class="product_img_part">
      <img :src="product">
      </div>
      <div class="product_img_name">accelerometer_plus</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
    products_img:["/product/01_Strain Gage.jpg","/product/02_Rebar Strain Meter.jpg","/product/03_Piezometer.jpg"
    ,"/product/04_Earth Pressure Cell.jpg","/product/05_Concrete Stress Cell (For NATM).jpg","/product/06_Load Cell.jpg","/product/07_LVDT for Extensometer.JPG",
    "/product/08_Inclinometer Casing.jpg","/product/09_In-Place Inclinometer.jpg","/product/10_Beam Sensor.jpg","/product/11_Tilt Sensor.jpg"
    ,"/product/12_Minilogger with few Channel.jpg","/product/13_Datalogger.jpg","/product/14_Wireless Node.jpg","/product/15_Wireless Sensor.jpg"
    ,"/product/16_Wireless Accelerometer.jpg"]
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/product.scss";
</style>
