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
import VueI18n from 'vue-i18n';

AOS.init();
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCQSyOIeBc0YnyCbpI5k3nHZ-bf61FxKaw',
    libraries: 'places', 
  },
})
 
Vue.use(VueCarousel);
Vue.use(VueResizeText);
Vue.use(VueI18n);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh', // 語言標識
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  }
})

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
