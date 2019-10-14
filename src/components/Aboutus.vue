<template>
  <div class="aboutusBack">
    <div class="aboutus_img"></div>
        <div class="aboutus_banner">
            <div class="aboutus_banner_word">
            {{ $t('banner.about') }}
            </div>
        </div>
     <div class="aboutus">
       <div class="aboutus_detail_img">

       </div>
      <div class="aboutus_detail">
        <span class="aboutus_title">{{ $t('aboutUs.title') }}</span>
        <span class="aboutus_content">
          {{ $t('aboutUs.content1') }}
          <br>
          <br>
          {{ $t('aboutUs.content2') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
@import "../assets/scss/aboutus.scss";
@import "../assets/scss/mobile/aboutus_mobile.scss";
</style>