<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Toast</span>
  </header-bar>
  <scroll-view>
    <button-area>
      <Button raised text="显示 toast" @click.native="show('default')"></Button>
      <Button raised text="在中间的 toast" @click.native="show('center')"></Button>
      <Button raised text="带icon的 toast" @click.native="show('ok')"></Button>
    </button-area>
  </scroll-view>
  <toast v-for="(toast, index) in toasts" :key="index" :text="toast.text" :loading="toast.loading" :icon="toast.icon" :center="toast.center"></toast>
</div>
</template>

<script>
export default {
  data () {
    return {
      toasts: []
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    show (type) {
      switch (type) {
        case 'center':
          this.toasts.push({
            text: '在中间',
            center: true
          })
          break
        case 'loading':
          this.toasts.push({
            text: '加载中...',
            loading: true
          })
          break
        case 'ok':
          this.toasts.push({
            text: '操作成功',
            icon: 'check',
            center: true
          })
          break
        default:
          this.toasts.push({
            text: '默认toast'
          })
          break
      }
      setTimeout(() => this.toasts.splice(0, 1), 2000)
    }
  }
}
</script>

<style lang="css">
</style>
