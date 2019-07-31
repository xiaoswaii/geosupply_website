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
		this.nowCountry = country;
		this.changeCountryList(country);
	},

	changeCountryList (country) {
		this.projectList = [];
		var test = this.raw.filter(element => element.place == country);
		test.forEach(element => {
			this.projectList.push(element.name);
		});
		console.log(test);
	},

	showProject (project) {
		var testing = this.raw.filter(element => element.name == project);
		console.log(testing)
		this.projectDetail = testing[0];
		console.log(this.projectDetail.location)
	}
	}
}
</script>

<style lang="scss">
@import "../assets/scss/project.scss";
</style>
