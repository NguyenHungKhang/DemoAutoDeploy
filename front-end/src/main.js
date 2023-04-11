import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import './assets/css/style.css'
import { store } from './storage'
window.axios = axios


Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
