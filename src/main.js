import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueResizeText from 'vue-resize-text';
import 'font-awesome/css/font-awesome.css';
import VueCarousel from 'vue-carousel';
import * as VueGoogleMaps from 'vue2-google-maps';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCQSyOIeBc0YnyCbpI5k3nHZ-bf61FxKaw',
    libraries: 'places', 
  },
})
 
Vue.use(VueCarousel);
Vue.use(VueResizeText);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
