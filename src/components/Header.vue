<template>
<div class="top">
  <div class="nav">
    <header>
      <a href="/" class="logo button"><img src="../assets/img/header_logo.png"></a>
      <div class="nav-right">
        <router-link to="./" class="title button">Home</router-link>
        <router-link to="./Project" class="title button">Project</router-link>
        <router-link to="/Product" class="title button">Product</router-link>
        <router-link to="./Contactus" class="title button">Contact Us</router-link>
        <router-link to="./Aboutus" class="title button">About Us</router-link>
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
