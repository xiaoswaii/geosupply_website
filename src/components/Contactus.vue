<template>
    <div class="contact">
        <div class="contact_detail">
            <div class="contact_detail_table">
                <h2>Contact Us</h2>
                <span class="contact_detail_list"><span class="contact_detail_logo"><i class="fa fa-home fa-lg"></i></span>221新北市汐止區建成路57巷28號6樓</span>
                <span class="contact_detail_list"><span class="contact_detail_logo"><i class="fa fa-envelope"></i></span>geosupply.tw@gmail.com</span>
                <span class="contact_detail_list"><span class="contact_detail_logo"><i class="fa fa-phone"></i></span>0918883451</span>
            </div>
        </div>
        <div class="mapouter" :height="height" :width="width">
            <div class="gmap_canvas">
                <iframe :width="width" :height="height" id="gmap_canvas" src="https://maps.google.com/maps?q=%E6%B1%90%E6%AD%A2&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
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
      this.height = ( window.innerHeight * 0.5 ) + 'px';
      this.width = ( window.innerWidth * 0.3 ) + 'px';
  }
}
</script>

<style lang="scss">
@import "../assets/scss/contactus.scss";
</style>