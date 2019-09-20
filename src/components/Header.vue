<template>
<div class="top">
  <div class="nav">
    <header>
      <div class="nav_logo"><a href="/" class="logo"><img src="../assets/img/header_logo.png"></a></div>
      <div class="nav-right">
        <router-link to="./" class="title button">HOME</router-link>
        <router-link to="./Project" class="title button">PROJECT</router-link>
        <router-link to="/Product" class="title button">PRODUCT</router-link>
        <router-link to="./Contactus" class="title button">CONTACT US</router-link>
        <router-link to="./Aboutus" class="title button">ABOUT US</router-link>
      </div>
    </header>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
@import "../assets/scss/nav.scss";
</style>
