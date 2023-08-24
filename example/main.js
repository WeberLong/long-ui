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

// let endTime = Date.now()
// document.addEventListener('touchend', () => {
//   endTime = Date.now()
// })

// router.beforeEach(function (to, from, next) {
//   console.log(Date.now())
//   console.log(endTime)
//   console.log((Date.now() - endTime))
//   if ((Date.now() - endTime) < 377) {
//     // 返回
//     sessionStorage.setItem('updateDirection', JSON.stringify({
//       direction: 0
//     }))
//     console.log('00000')
//   } else {
//     // 前进
//     sessionStorage.setItem('updateDirection', JSON.stringify({
//       direction: 1
//     }))
//     console.log('11111')
//   }
//   next()
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
