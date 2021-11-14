import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ApiService from '@/common/api.service';
import store from './store';
Vue.config.productionTip = false

ApiService.init(store);
const vue =new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
ApiService.setVue(vue)