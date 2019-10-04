<template>
<div class="top">
  <div class="nav" id="nav">
    <header>
      <div class="nav_logo"><a href="/" class="logo"><img :style="logoStyle" src="../assets/img/header_logo.png" id="headerlogo"></a></div>
      <div class="nav-right" id="navright">
        <router-link active-class="router-active" to="./" class="title button">HOME</router-link>
        <router-link active-class="router-active" to="./Project" class="title button" id="project">PROJECT</router-link>
        <router-link active-class="router-active" to="./Software" class="title button">SOFTWARE</router-link>
        <router-link active-class="router-active" to="./Product" class="title button">PRODUCT</router-link>
        <router-link active-class="router-active" to="./Contactus" class="title button">CONTACT US</router-link>
        <router-link active-class="router-active" to="./Aboutus" class="title button">ABOUT US</router-link>
      </div>
    </header>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      logoStyle:'',
    }
  },
  mounted(){
    this.logoStyle= `max-width:${((document.getElementById('nav').offsetWidth) - (document.getElementById('navright').offsetWidth)) * 0.7}px;max-height:100%;`;
  }
}
</script>

<style lang="scss">
@import "../assets/scss/nav.scss";
</style>
