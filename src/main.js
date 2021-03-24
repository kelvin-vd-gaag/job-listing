import Vue from 'vue'
import App from './App.vue'

//Setting the variable tags global so both app.vue and JobList.vue have access to it.
Vue.prototype.$tags = []

new Vue({
  el: '#app',
  render: h => h(App),
})

