<template>
<div class="top">
  <div class="nav" id="nav">
    <header>
      <div class="nav_logo"><a href="/" class="logo"><img class="logo_img" src="../assets/img/header_logo.png" id="headerlogo"></a></div>
      <div class="nav-right" id="navright">
        <router-link active-class="router-active" to="./" class="title button">{{$t('nav.home')}}</router-link>
        <router-link active-class="router-active" to="./Project" class="title button" id="project">{{$t('nav.project')}}</router-link>
        <router-link active-class="router-active" to="./Software" class="title button">{{$t('nav.software')}}</router-link>
        <router-link active-class="router-active" to="./Product" class="title button">{{$t('nav.product')}}</router-link>
        <router-link active-class="router-active" to="./Contactus" class="title button">{{$t('nav.contact')}}</router-link>
        <router-link active-class="router-active" to="./Aboutus" class="title button">{{$t('nav.about')}}</router-link>
        <span@click="test()">test</span>
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
    if(window.innerWidth < 480){
      this.logoStyle= `max-width:65px;max-height:100%;`;
    }
  },

  methods: {
    test() {
      console.log('test')
      console.log(this.$i18n.locale)
      if(this.$i18n.locale =='zh'){
        this.$i18n.locale ='en'
      }
      else {
        this.$i18n.locale ='zh'
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/nav.scss";
@import "../assets/scss/mobile/nav_mobile.scss";
</style>
