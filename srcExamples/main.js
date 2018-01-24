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

let endTime = Date.now()
document.addEventListener('touchend', () => {
  endTime = Date.now()
})

router.beforeEach(function (to, from, next) {
  if ((Date.now() - endTime) < 377) {
    localStorage.setItem('updateDirection', JSON.stringify({
      direction: 0
    }))
  } else {
    localStorage.setItem('updateDirection', JSON.stringify({
      direction: 1
    }))
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
