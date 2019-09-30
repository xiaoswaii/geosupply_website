<template>
  <div class="software">
    <div class="software_img"></div>
    <div class="software_banner">
      <div class="software_banner_word">
        Software
      </div>
    </div>
  <div class="software_info">
    <div class="fit_software_list"> 
      <div class="software_list">
        <table class="software_list_table">
						<thead>
							<tr class="software_list_table_header">
								<th class="software_list_title" colspan="2">CLOUD PLATFORM</th>
							</tr>
						</thead>
						<tbody>
							<tr class="software_list_item" :key="country" v-for="country in countries">
								<td class="column1_software" @click="showCountry(country)">{{ country }}</td>
							</tr>
						</tbody>
					</table>
      </div>
      </div>
      <div class="software_detail">
          <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/gcp.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>GeoSupply Cloud Server at Google Cloud Platform</li>
                  <li>Trust and Security</li>
                  <li>Safe and secure</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/integrate.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>Integrate Different Type of Monitoring Systems 
                      (Including Fiber Optic FBG System、Analog System、Digital System、Automated 
                      Total Station、Vibration System and etc)
                  </li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/data-collection.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>Collect Data</li>
                  <li>Manual and real-time data capture</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/analysis.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>Data processing </li>
                  <li>Calculation </li>
                  <li>Data analysis </li>
                  <li>Data Display</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/line-chart.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>Custom Graphing</li>
                  <li>Multi-axis (different sensors plot in one graph)</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/map-location.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>GIS Mapping</li>
                  <li>Geographical View (OpenStreetMap)</li>
                  <li>Any type of layout</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/alarm.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>Trigger system</li>
                  <li>Email / SMS notification</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_bottom">
              <img src="../assets/img/17_CloudSoftware.jpg">
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
      mapStyle:"",
      countries: ['Client Login','Client Login','Demo'],
      countriesSelect: ['TAIWAN','MALAYSIA','INDONESIA'],
		  raw: [],
		  nowCountry: '',
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
      var standardWidth = window.innerWidth * 0.49 + 'px';
      var standardHeight = window.innerHeight * 0.52 + 'px';
      this.mapStyle= `width:${standardWidth};height:${standardHeight}`
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
              this.projectMalaysia = this.raw.filter(element => element.place == 'MALAYSIA');
              this.projectIndonesia = this.raw.filter(element => element.place == 'INDONESIA');
              this.projectTaiwan = this.raw.filter(element => element.place == 'TAIWAN');
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
      document.getElementById('project_table').style.display = 'none';
      document.getElementById('fit_project_album').style.display = 'none';
      //document.getElementById('project_album').style.display = 'none';
	},

  listAll () {
    this.countriesSelect = ['TAIWAN','MALAYSIA','INDONESIA'];
    this.projectDetail = {};
    this.projectCountry = this.raw;
    document.getElementById('project_list').style.display = 'block';
    document.getElementById('project_table').style.display = 'none';
    document.getElementById('fit_project_album').style.display = 'none';
    //document.getElementById('project_album').style.display = 'none';
  },

	showProject (project) {
      document.getElementById('project_list').style.display = 'none';
      var tempProjectDetail = this.raw.filter(element => element.name == project);
      this.projectDetail = tempProjectDetail[0];
      this.projectAlbum = tempProjectDetail[0].img;
      this.projectPhotoNow = tempProjectDetail[0].img[0];
      document.getElementById('project_table').style.display = 'block';
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
@import "../assets/scss/software.scss";
</style>
