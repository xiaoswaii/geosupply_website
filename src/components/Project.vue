<template>
  <div class="project">
    <div class="project_img"></div>
    <div class="project_banner">
      <div class="project_banner_word" id="projectBanner">
        Project <div class="project_banner_country" id="projectCountry" v-if="countriesSelect.length == 1"> > {{ countriesSelect[0] }} </div><div class="project_banner_country" id="projectName" v-if="projectDetail"> > {{ projectDetail.name }}</div>
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
								<th class="project_list_title" colspan="2">LIST OF COUNTRY</th>
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
    <div class="project_detail" id="project_detail">
      <div class="project_detail_list" id="project_list">
        <GmapMap
        :center="{lat:11.611474, lng:120.4516083}"
        :zoom="zooming()"
        map-type-id="terrain"
        :style="mapStyle"
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
        <div id="country_list">
          <div :key="country" v-for="country in countriesSelect">
          <br>
          <span>{{ country }}</span>
          <span class="country_br"></span>
          <ul>
            <div :key="project.name" v-for="project in projectCountry">
              <li class="li" v-if="project.place == country" @click="showProject( project.name )">{{ project.name }}</li>
            </div>
          </ul>
          </div>
        </div>
      </div>
      <div class="fit_project_album" id="fit_project_album">
        <div class="project_album">
        <div v-if="projectAlbum" class="project_album_now">
          <img v-if="projectPhotoNow" class="project_album_show" :src="projectPhotoNow">
        </div>
        <div v-if="projectAlbum" class="project_album_list">
          <img :key="pic" v-for="pic in projectAlbum" class="project_album_photo" :src="pic" @click="changePhoto"><br>
        </div>
        </div>
      </div>
      <div class="project_table" id="project_table">
         <table class="project_detail_table_whole" id="project_detail_table">
						<thead>
							<tr class="table100-head">
								<th class="column" colspan="2">Project Detail</th>
							</tr>
						</thead>
              <ul class="project_details_list">
                <br>
                <li v-if="projectDetail.name" class="project_detail_li">
                    <span>Name of Project:</span>
                    <span>{{ projectDetail.name }}</span>
                </li>
                <br v-if="projectDetail.name">
                <div class="line"></div>
                
                
                <li v-if="projectDetail.location" class="project_detail_li place">
                  <span>Project Location:</span>
                  <span>{{ projectDetail.location }}</span>
                </li>
                <br v-if="projectDetail.location">
                <div v-if="projectDetail.location" class="line"></div>
     
                <li v-if="projectDetail.contractor" class="project_detail_li contractor">
                  <span>Main Contractor:</span>
                  <span>{{ projectDetail.contractor }}</span>
                </li>
                <br v-if="projectDetail.contractor">
                <div v-if="projectDetail.contractor" class="line"></div>
                
                
                <li v-if="projectDetail.software" class="project_detail_li grey">
                  <span>Software:</span>
                  <span>{{ projectDetail.software }}</span>
                </li>
                <br v-if="projectDetail.software">
                <div v-if="projectDetail.software" class="line"></div>
                
                
                <li v-if="projectDetail.detail" class="project_detail_li">
                  <span>Project Detail:</span>
                  <span>{{ projectDetail.detail }}</span>
                </li>
                <br v-if="projectDetail.detail">
                <div v-if="projectDetail.detail" class="line"></div>
                
                <li class="project_detail_li">
                  <span>Instrument:</span>
                  <span :key="instrument" v-for="instrument in projectDetail.instrument">{{ instrument }}</span>
                </li>
                <br>
              </ul>
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
      mapStyle:"",
      zoomCom:3.9,
      zoomMobile: 2.5,
      markers: [{
        position: {lat: 3.1385036, lng: 101.6169498}
        },
        {position:{lat: -6.229728, lng: 106.6894348}},
        {position:{lat: 25.0169639, lng: 121.2261992}}],
      countries: ['Taiwan','Malaysia','Indonesia'],
      countriesSelect: ['Taiwan','Malaysia','Indonesia'],
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
       var country = location.href.split('=')[1]
       if(country){
        this.showCountry(country);
        var element = document.getElementById("project");
        element.classList.add("router-link-exact-active");
       }
        var standardWidth= (document.getElementById('project_detail').offsetWidth)
       var standardHeight = (document.getElementById('project_detail').offsetHeight)* 0.47;
       this.mapStyle= `width:${standardWidth}px;height:${standardHeight}px`;
       if(window.innerWidth <420){
         var standardWidth= (document.getElementById('project_detail').offsetWidth)
         var standardHeight = (document.getElementById('project_detail').offsetHeight)* 0.3;
         this.mapStyle= `width:${standardWidth}px;height:${standardHeight}px`;
       }
      this.$nextTick(() => {
         window.addEventListener('resize', this.doOnOrientationChange);
         //console.log(window.innerWidth)
         this.doOnOrientationChange()
      })
  },

	methods: {
      openFile () {
          	  axios.get(`${window.location.protocol}/project.json`)
		  	  .then(res =>{
		  	  	  //console.log(res);
              this.raw = res.data.project;
              this.projectCountry = res.data.project;
              //console.log(this.raw);
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
      document.getElementById('project_table').style.display = 'none';
      document.getElementById('fit_project_album').style.display = 'none';
      //document.getElementById('project_album').style.display = 'none';
      var fontSize = document.querySelector('#projectBanner')
    fontSize.classList.remove('small_font')
	},

  listAll () {
    this.countriesSelect = ['Taiwan','Malaysia','Indonesia'];
    this.projectDetail = {};
    this.projectCountry = this.raw;
    document.getElementById('project_list').style.display = 'block';
    document.getElementById('project_table').style.display = 'none';
    document.getElementById('fit_project_album').style.display = 'none';
    //document.getElementById('project_album').style.display = 'none';
    var fontSize = document.querySelector('#projectBanner')
    fontSize.classList.remove('small_font')
  },

	showProject (project) {
      document.getElementById('project_list').style.display = 'none';
      var tempProjectDetail = this.raw.filter(element => element.name == project);
      this.projectDetail = tempProjectDetail[0];
      this.projectAlbum = tempProjectDetail[0].img;
      this.projectPhotoNow = tempProjectDetail[0].img[0];
      document.getElementById('project_table').style.display = 'block';
      document.getElementById('fit_project_album').style.display = 'block';

      if(this.projectDetail.name.length >=60) {
        var fontSize = document.querySelector('#projectBanner')
        fontSize.classList.add('small_font')
      }
      //document.getElementById('project_album').style.display = 'block';
  },
  
  changePhoto (img) {
      this.projectPhotoNow = img.srcElement.src;
  },

  zooming () {
    if(window.innerWidth>420){
      return this.zoomCom
    }
    else{ return this.zoomMobile }
  },
  doOnOrientationChange() {
    //let _this = this
    if(window.innerWidth > 420){
       var standardWidth= (document.getElementById('project_detail').offsetWidth)
       var standardHeight = (document.getElementById('project_detail').offsetHeight)* 0.47;
       this.mapStyle= `width:${standardWidth}px;height:${standardHeight}px`;
       this.zooming();
    }else {
      var standardWidth= (document.getElementById('project_detail').offsetWidth)
      var standardHeight = (document.getElementById('project_detail').offsetHeight)* 0.3;
      this.mapStyle= `width:${standardWidth}px;height:${standardHeight}px`;
      this.zooming();
    }
},
  },

  beforeDestroy() {
    window.removeEventListener('orientationchange', this.doOnOrientationChange);
  }
  
}
</script>

<style lang="scss">
@import "../assets/scss/project.scss";
@import "../assets/scss/mobile/project_mobile.scss";
</style>
