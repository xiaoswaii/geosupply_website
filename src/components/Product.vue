<template>
<div class="product">
  <div class="product_img"></div>
  <div class="product_banner">
    <div class="product_banner_word">
    PRODUCT
    </div>
  </div>
  <div class="product_main">
    <div class="product_img_spec">
      <div class="product_img_part">
      <img src="../assets/img/accelerometer_plus.jpg">
      </div>
      <div class="product_img_name">accelerometer_plus</div>
    </div>
    <div class="product_img_spec">
      <div class="product_img_part">
      <img src="../assets/img/mems_tilt_beam.jpg">
      </div>
      <div class="product_img_name">mems_tilt_beam</div>
    </div>
    <div class="product_img_spec">
      <div class="product_img_part">
      <img src="../assets/img/vw_load_cell.jpg">
      </div>
      <div class="product_img_name">vw_load_cell</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
}
</script>

<style lang="scss">
@import "../assets/scss/product.scss";
</style>
