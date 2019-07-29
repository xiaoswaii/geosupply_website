<template>
  <div class="project">
  <div class="project_img"></div>
  <div class="project_select">
    <div class="project_country">
      Select Region:
    </div>
      <a :key="country" v-for="country in countries" class="project_option">{{ country }}</a>
  </div>
  <div class="project_info">
    <div class="project_list">
      <span class="project_list_title">Malaysia</span>
      <ul>
        <li class="project_list_item">1</li>
        <li class="project_list_item">2</li>
        <li class="project_list_item">3</li>
      </ul>
    </div>
    <div class="project_detail">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: [],
  data(){
    return {
      countries:["Malaysia","Taiwan","Indonesia"]
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/project.scss";
</style>
