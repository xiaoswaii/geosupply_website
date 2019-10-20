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
        <span class="changeLang" @click="changeLang()">
          <!-- <span @click="changeLang('zh')" class="zh" id="zh">中</span>
          <span @click="changeLang('en')" class="en" id="en">EN</span> -->
        </span>
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

  computed:{
    changeNav: function(){
      return this.$i18n.locale
    }
  },

  watch: {
    changeNav :function(val){
      if(val == 'zh'){
        var i = document.querySelectorAll('.button');
        for(var k =0;k<=i.length;k++){
          i[k].classList.add("cn");
        }
      }
      else {
         var i = document.querySelectorAll('.button');
          for(var k =0;k<=i.length;k++){
           i[k].classList.remove("cn");
        }
      }
    }
  },

  mounted(){
    this.logoStyle= `max-width:${((document.getElementById('nav').offsetWidth) - (document.getElementById('navright').offsetWidth)) * 0.7}px;max-height:100%;`;
    if(window.innerWidth < 480){
      this.logoStyle= `max-width:65px;max-height:100%;`;
    }
  },

  methods: {
    changeLang() {
      if(this.$i18n.locale =='zh'){
        // document.querySelector('#en').style.opacity = '1'
        // document.querySelector('#zh').style.opacity = '0.5'
        // document.querySelector('#zh').style.cursor = 'default'
        // document.querySelector('#en').style.cursor = 'pointer'
        this.$i18n.locale = 'en';
      }
      else {
        // document.querySelector('#en').style.opacity = '0.5'
        // document.querySelector('#zh').style.opacity = '1'
        // document.querySelector('#zh').style.cursor = 'pointer'
        // document.querySelector('#en').style.cursor = 'default'
        this.$i18n.locale = 'zh'
      }
      // if(document.querySelector('#changeLang').style.transform == 'rotateY(360deg)'){
      //   document.querySelector('#changeLang').style.transform = 'rotateY(0deg)'
      // }
      // else {
      //   document.querySelector('#changeLang').style.transform = "rotateY(360deg)"
      // }
      //document.querySelector('#changeLang').style.transform = "rotateX(0deg)"
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/nav.scss";
@import "../assets/scss/mobile/nav_mobile.scss";
</style>
