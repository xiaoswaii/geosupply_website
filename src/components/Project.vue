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
      <ul>
        <li class="project_list_title">Malaysia</li>
        <li class="project_list_item">Project 001</li>
        <li class="project_list_item">Project 002</li>
        <li class="project_list_item">Project 003</li>
      </ul>
    </div>
    <div class="project_detail">
      <div class="project_album">
        <div class="project_album_now">
          <img class="project_album_show" src="../assets/img/Picture1.png">
        </div>
        <div class="project_album_list">
          <img class="project_album_photo" src="../assets/img/Picture2.png">
          <img class="project_album_photo" src="../assets/img/Picture2.png">
          <img class="project_album_photo" src="../assets/img/Picture2.png">
          <img class="project_album_photo" src="../assets/img/Picture2.png">
        </div>
      </div>
      <div class="project_detail_list">
        <table>
          <tr class="project_detail_table"><td>Name of Project:</td><td></td></tr>
          <tr class="project_detail_table"><td>Project Location:</td><td></td></tr>
          <tr class="project_detail_table"><td>Project Details:</td><td></td></tr>
          <tr class="project_detail_table"><td>Main Contractor:</td><td></td></tr>
          <tr class="project_detail_table"><td>Software</td><td></td></tr>
          <tr class="project_detail_table"><td>Instrument</td><td></td></tr>
        </table>
      </div>
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
