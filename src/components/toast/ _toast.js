import Toast from './toast.vue'

export default {
  install (Vue, options = {}) {
    const property = options.property || '$toast'
    const instance = new Vue(Toast)
    document.body.appendChild(instance.$mount().$el)
    const toast = {
      show (text) {
        instance.text = text
        instance.show()
      }
    }
    Vue.prototype[property] = toast
  }
}
