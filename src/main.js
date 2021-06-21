import Vue from 'vue'
import App from './App.vue'
import {http} from './http';
import store from './store';

Vue.config.productionTip = false

new Vue({
  store,
  http,
  render: h => h(App),
}).$mount('#app')
