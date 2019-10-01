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
							<tr class="software_list_item" @click="relocate('http://104.199.169.90')">
								<td class="column1_software">Client Login</td>
							</tr>
              <tr class="software_list_item" @click="relocate('http://geo.geosupply.com')">
								<td class="column1_software">Client Login</td>
							</tr>
              <tr class="software_list_item">
								<td class="column1_software">Demo</td>
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
      var standardWidth = window.innerWidth * 0.49 + 'px';
      var standardHeight = window.innerHeight * 0.52 + 'px';
      this.mapStyle= `width:${standardWidth};height:${standardHeight}`
	},

	methods: {
      relocate(route){
        document.location.href=route;
      }
	}
}
</script>

<style lang="scss">
@import "../assets/scss/software.scss";
</style>
