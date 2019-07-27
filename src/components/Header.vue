<template>
  <div class="nav">
    <header>
      <span class="brand">GEOSUPPLY</span>
      <div class="title_row">
        <router-link to="/Project"><li class="title">Project</li></router-link>
        <router-link to="/Aboutus"><span class="title">About us</span></router-link>
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
