<template>
    <div class="contact">
        <div class="contact_detail">
            <div>
                <span>Company Name:</span>

            </div>
        </div>
        <div class="mapouter">
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
      this.width = ( window.innerWidth * 0.4 ) + 'px';
  }
}
</script>

<style lang="scss">
@import "../assets/scss/contactus.scss";
</style>