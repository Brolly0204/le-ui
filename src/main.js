import Vue from 'vue'
import App from './App.vue'
import LeUI from './packages'

Vue.config.productionTip = false

// install ui
Vue.use(LeUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
