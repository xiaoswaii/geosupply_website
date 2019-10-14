<template>
  <div class="software">
    <div class="software_img"></div>
    <div class="software_banner">
      <div class="software_banner_word">
        {{ $t('banner.software') }}
      </div>
    </div>
  <div class="software_info">
    <div class="fit_software_list"> 
      <div class="software_list">
        <table class="software_list_table">
						<thead>
							<tr class="software_list_table_header">
								<th class="software_list_title" colspan="2">{{ $t('software.listTitle') }}</th>
							</tr>
						</thead>
						<tbody>
							<tr class="software_list_item" @click="relocate('http://104.199.169.90')">
								<td class="column1_software">{{ $t('software.list[0]') }}</td>
							</tr>
              <tr class="software_list_item" @click="relocate('https://geo.geosupply.com.tw')">
								<td class="column1_software">{{ $t('software.list[1]') }}</td>
							</tr>
              <tr class="software_list_item">
								<td class="column1_software">{{ $t('software.list[2]') }}</td>
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
                <ul class="gcp">
                  <li :key="list" v-for="list in $t('software.cloud')">{{ list }}</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/integrate.png">
              </div>
              <div class="software_detail_list_intro">
                <ul>
                  <li>{{ $t('software.intergrate[0]') }}</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/data-collection.png">
              </div>
              <div class="software_detail_list_intro double">
                <ul>
                  <li :key="list" v-for="list in $t('software.collectData')">{{ list }}</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/analysis.png">
              </div>
              <div class="software_detail_list_intro">
                <ul class="data">
                  <li :key="list" v-for="list in $t('software.analysisData')">{{ list }}</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/line-chart.png">
              </div>
              <div class="software_detail_list_intro double">
                <ul>
                  <li :key="list" v-for="list in $t('software.graph')">{{ list }}</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/map-location.png">
              </div>
              <div class="software_detail_list_intro map">
                <ul>
                  <li :key="list" v-for="list in $t('software.map')">{{ list }}</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_list">
              <div class="software_detail_list_logo">
                <img src="../assets/img/software/alarm.png">
              </div>
              <div class="software_detail_list_intro double">
                <ul>
                  <li :key="list" v-for="list in $t('software.alarm')">{{ list }}</li>
                </ul>
              </div>
            </div>
            <div class="software_detail_bottom">
              <img src="../assets/img/17_CloudSoftware.jpg">
            </div>
            <div class="software_detail_bottom_title">
              Geosupply Cloud Platform
            </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
	name: 'Footer',
	props: [],	
	data () {
      return { }
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
@import "../assets/scss/mobile/software_mobile.scss";
</style>
