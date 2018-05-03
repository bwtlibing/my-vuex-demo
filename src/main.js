import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
// import store from './store副本/store'
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})