// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import LongUI from '../src/index'
import router from './router'

FastClick.attach(document.body)
Vue.use(LongUI)

Vue.config.productionTip = false

console.log('000')
console.log(LongUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
