<template>
    <div id="contact" class="contact">
        <div class="contact_img"></div>
        <div class="contact_banner">
            <div class="contact_banner_word">
            Contact Us
            </div>
        </div>
        <div class="contact_detail">
            <div class="contact_detail_table">
                <h1 class="contact_info">Contact Info</h1>
                <span class="contact_detail_list address"><span class="contact_detail_logo"><i class="fa fa-home fa-lg"></i></span><span class="contact_detail_word">6F., No.28, Ln. 57, Jiancheng Rd., Xizhi Dist., New Taipei City 221, Taiwan (R.O.C.)
                    <br>1F., No.30, Ln. 56, Jiancheng Rd., Xizhi Dist., New Taipei City 221, Taiwan (R.O.C.)</span></span>
                <span class="contact_detail_list"><span class="contact_detail_logo"><i class="fa fa-envelope fa-cus"></i></span><span class="contact_detail_word">geosupply.tw@gmail.com</span></span>
                <span class="contact_detail_list"><span class="contact_detail_logo"><i class="fa fa-phone fa-lg"></i></span><span class="contact_detail_word">+886-918 883451  +886‐2‐26481050</span></span>
            </div>
        </div>
        <div class="mapouter" :height="height" :width="width">
            <div class="gmap_canvas">
                <iframe :width="width" :height="height" id="gmap_canvas" src="https://maps.google.com/maps?q=221%E6%96%B0%E5%8C%97%E5%B8%82%E6%B1%90%E6%AD%A2%E5%8D%80%E5%BB%BA%E6%88%90%E8%B7%AF57%E5%B7%B728%E8%99%9F&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
      return {
          height: '',
          width: ''
      }
  },
  mounted () {
      if(window.innerWidth < 400){
           this.height = ( window.innerHeight * 0.5 ) + 'px';
           this.width = ( window.innerWidth * 0.9 ) + 'px';
      }
      else {
            this.height = ( document.getElementById("contact").offsetHeight * 0.5 ) + 'px';
            this.width = ( document.getElementById("app").offsetWidth * 0.45 ) + 'px';
      }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/contactus.scss";
</style>