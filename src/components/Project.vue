<template>
  <div class="project">
    <div class="project_img"></div>
    <div class="project_banner">
      <div class="project_banner_word">
        Project <div class="project_banner_country" v-if="countriesSelect.length == 1"> > {{ countriesSelect[0] }} </div><div class="project_banner_country" v-if="projectDetail"> > {{ projectDetail.name }}</div>
      </div>
    </div>
  <div class="project_info">
    <div class="fit_project_list"> 
      <div class="project_list">
        <!-- <ul>
          <li class="project_list_title">{{ nowCountry }}</li>
          <li :key="project" v-for="project in projectList" class="project_list_item" @click="showProject( project )">{{ project }}</li>
        </ul> -->
        <table class="project_list_table">
						<thead>
							<tr class="project_list_table_header">
								<th class="project_list_title" colspan="2">List of Country</th>
							</tr>
						</thead>
						<tbody>
								<tr class="project_list_item" :key="country" v-for="country in countries">
									<td class="column1_project" @click="showCountry(country)">{{ country }}</td>
								</tr>
                <tr class="project_list_item">
									<td class="column1_project" @click="listAll()">List All</td>
								</tr>
						</tbody>
					</table>
      </div>
    </div>
    <div class="project_detail">
      <div class="project_detail_list" id="project_list">
        <GmapMap
        :center="{lat:11.611474, lng:120.4516083}"
        :zoom="3.9"
        map-type-id="terrain"
        style="width: 750px; height: 400px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>
        <div :key="country" v-for="country in countriesSelect">
          <span >{{ country }}</span>
          <ul>
            <div :key="project.name" v-for="project in projectCountry">
              <li class="li" v-if="project.place == country" @click="showProject( project.name )">{{ project.name }}</li>
            </div>
          </ul>
        </div>
      </div>
      <div class="fit_project_album" id="fit_project_album">
        <div class="project_album">
        <div v-if="projectAlbum" class="project_album_now">
          <img v-if="projectPhotoNow" class="project_album_show" :src="projectPhotoNow">
        </div>
        <div v-if="projectAlbum" class="project_album_list">
          <img :key="pic" v-for="pic in projectAlbum" class="project_album_photo" :src="pic" @click="changePhoto">
        </div>
        </div>
      </div>
      <div class="project_table">
         <table class="project_detail_table_whole" id="project_detail_table">
						<thead>
							<tr class="table100-head">
								<th class="column" colspan="2">Project Detail</th>
							</tr>
						</thead>
						<tbody>
                <tr class="">
									<td class="">Name of Project:</td>
									<td class="">{{ projectDetail.name }}</td>
								</tr>
                <tr class="">
									<td class="">Project Location:</td>
									<td class="">{{ projectDetail.location }}</td>
								</tr>
                <tr class="">
									<td class="">Main Contractor:</td>
									<td class="">{{ projectDetail.contractor }}</td>
								</tr>
                <tr class="">
									<td class="">Software</td>
									<td class="">{{ projectDetail.software }}</td>
								</tr>
                <tr class="">
									<td class="">Instrument</td>
									<td class=""><span :key="instrument" v-for="instrument in projectDetail.instrument">{{ instrument }}</span></td>
								</tr>
                <tr class="">
									<td class="">Project Detail</td>
									<td class="">{{ projectDetail.detail }}</td>
								</tr>
						</tbody>
					</table> 
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import  axios  from 'axios';

export default {
	name: 'Footer',
	props: [],	
	data () {
      return {
      markers: [{
        position: {lat: 3.1385036, lng: 101.6169498}
        },
        {position:{lat: -6.229728, lng: 106.6894348}},
        {position:{lat: 25.0169639, lng: 121.2261992}}],
      countries: ['Malaysia','Taiwan','Indonesia'],
      countriesSelect: ['Malaysia','Taiwan','Indonesia'],
		  raw: [],
		  nowCountry: '',
		  projectList: [],
      projectDetail: [],
      projectAlbum: [],
      projectPhotoNow: '',
      projectMalaysia: [],
      projectTaiwan: [],
      projectIndonesia: [],
      projectCountry: [],
      standardWidth:'',
      }
	},	

  beforeRouteUpdate(to) {
    this.$route.params.name = to.params.name
  },


  watch: {
    '$route' (to, from) {
      console.log('hahaha')
      if(to === from){
        console.log('wtf')
      }
    }
  },

	mounted () {
      this.openFile();	  
      this.standardWidth = window.innerWidth * 0.52 + 'px';
	},

	methods: {
      openFile () {
          	  axios.get(`${window.location.protocol}/project.json`)
		  	  .then(res =>{
		  	  	  console.log(res);
              this.raw = res.data.project;
              this.projectCountry = res.data.project;
              console.log(this.raw);
          })
          .then(res =>{
              this.projectMalaysia = this.raw.filter(element => element.place == 'Malaysia');
              this.projectIndonesia = this.raw.filter(element => element.place == 'Indonesia');
              this.projectTaiwan = this.raw.filter(element => element.place == 'Taiwan');
          })   
          // .catch(err => {
		  	  //     console.log(err);
          // })
	},
	
	showCountry (country) {
      this.projectCountry = [];
      this.projectDetail = {};
      this.countriesSelect = [country];
		  this.projectCountry = this.raw.filter(element => element.place == country);
      document.getElementById('project_list').style.display = 'block';
      document.getElementById('project_detail_table').style.display = 'none';
      document.getElementById('fit_project_album').style.display = 'none';
      //document.getElementById('project_album').style.display = 'none';
	},

  listAll () {
    this.countriesSelect = ['Malaysia','Taiwan','Indonesia'];
    this.projectDetail = {};
    this.projectCountry = this.raw;
    document.getElementById('project_list').style.display = 'block';
    document.getElementById('project_detail_table').style.display = 'none';
    document.getElementById('fit_project_album').style.display = 'none';
    //document.getElementById('project_album').style.display = 'none';
  },

	showProject (project) {
      document.getElementById('project_list').style.display = 'none';
      var tempProjectDetail = this.raw.filter(element => element.name == project);
      this.projectDetail = tempProjectDetail[0];
      this.projectAlbum = tempProjectDetail[0].img;
      this.projectPhotoNow = tempProjectDetail[0].img[0];
      document.getElementById('project_detail_table').style.display = 'block';
      document.getElementById('fit_project_album').style.display = 'block';
      //document.getElementById('project_album').style.display = 'block';
  },
  
  changePhoto (img) {
      this.projectPhotoNow = img.srcElement.src;
  }
	}
}
</script>

<style lang="scss">
@import "../assets/scss/project.scss";
</style>
