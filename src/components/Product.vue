<template>
<div class="product">
  <div class="product_img"></div>
  <div class="product_banner">
    <div class="product_banner_word">
    Product
    </div>
  </div>
  <div class="product_main">
    <div :key="product.name" v-for="product in $t('products')" class="product_img_spec" id="product_img_spec" @click="locationContact()">
      <div class="product_img_part">
      <div class="overlay">{{ $t('productContact') }}</div>
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
    return {}
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
@import "../assets/scss/mobile/product_mobile.scss";
</style>
