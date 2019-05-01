import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
