import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueResizeText from 'vue-resize-text';
 
Vue.use(VueResizeText)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
