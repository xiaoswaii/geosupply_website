<template>
  <div class="nav">
    <header>
      <a class="brand"></a>
      <a class="logo">GEOSUPPLY</a>
      <div class="nav-right">
        <router-link to="/Project" >Project</router-link>
        <router-link to="/Aboutus" >About us</router-link>
      </div>
    </header>
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
