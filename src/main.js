// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueGridLayout from 'vue-grid-layout'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false
Vue.use(ToggleButton)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {

  },
  data: {
    draggable: true,
    resizable: true,
    index: 0
  },
  router,
  components: { App },
  template: '<App/>'
})
