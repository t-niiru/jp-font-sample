import Vue from 'vue'
import ress from 'ress'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/stylesheets/style.scss'
import App from './App.vue'
import router from './router'

Vue.use(ress)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
