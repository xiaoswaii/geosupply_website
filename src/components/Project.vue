<template>
  <div class="project">
  <div class="project_img"></div>
  <div class="project_select">
    <div class="project_country">
      Select Region:
    </div>
      <a :key="country" v-for="country in countries" class="project_option" @click = "showCountry( country )">{{ country }}</a>
  </div>
  <div class="project_info">
    <div class="project_list">
      <ul>
        <li class="project_list_title">{{ nowCountry }}</li>
        <li v-for="project in projectList" class="project_list_item" @click = "showProject( project )">{{ project }}</li>
      </ul>
    </div>
    <div class="project_detail">
      <div class="project_album">
        <div class="project_album_now">
          <img v-if="projectAlbum" class="project_album_show" :src="projectAlbum[0]">
        </div>
        <div class="project_album_list">
          <img v-for="pic in projectAlbum" class="project_album_photo" :src="pic">
        </div>
      </div>
      <div class="project_detail_list">
        <table>
          <tr class="project_detail_table"><td>Name of Project:</td><td>{{ projectDetail.name }}</td></tr>
          <tr class="project_detail_table"><td>Project Location:</td><td>{{ projectDetail.location }}</td></tr>
          <tr class="project_detail_table"><td>Project Details:</td><td>{{ projectDetail.detail }}</td></tr>
          <tr class="project_detail_table"><td>Main Contractor:</td><td>{{ projectDetail.contractor }}</td></tr>
          <tr class="project_detail_table"><td>Software</td><td>{{ projectDetail.software }}</td></tr>
          <tr class="project_detail_table"><td>Instrument</td><td><span v-for="instrument in projectDetail.instrument">{{ instrument }}</span></td></tr>
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
		countries: ["Malaysia","Taiwan","Indonesia"],
		raw: [],
		nowCountry: '',
		projectList: [],
    projectDetail: [],
    projectAlbum: [],
    }
	},	

	mounted () {
		this.openFile();		  
	},

	methods: {
    openFile () {
      	axios.get('http://localhost:8080/project.json')
			.then(res =>{
				console.log(res);
				this.raw = res.data.project;
				console.log(this.raw);
			}).catch(err => {
			    console.log(err);
			})
	},
	
	showCountry (country) {
		this.projectDetail = {};
		this.nowCountry = country;
		this.changeCountryList(country);
	},

	changeCountryList (country) {
    this.projectList = [];
    this.projectAlbum = [];
		var tempProjectList = this.raw.filter(element => element.place == country);
		tempProjectList.forEach(element => {
			this.projectList.push(element.name);
		});
	},

	showProject (project) {
    var tempProjectDetail = this.raw.filter(element => element.name == project);
    this.projectDetail = tempProjectDetail[0];
    this.projectAlbum = tempProjectDetail[0].img;
	}
	}
}
</script>

<style lang="scss">
@import "../assets/scss/project.scss";
</style>
