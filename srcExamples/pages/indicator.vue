<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Indicator</span>
    </header-bar>
    <scroll-view class="center-block">
      <button-area>
        <Button text="点击弹出 indicator" @click.native="showIndicator()" raised></button>
        <Button text="弹出 modal indicator" @click.native="showModalIndicator()" raised></button>
        <Button text="控制透明度" @click.native="showOpactiyIndicator()" raised></button>
      </button-area>
    </scroll-view>
    <indicator :show="indicator.show" :type="indicator.type" :text="indicator.text"  :overlayOpacity="indicator.opactiy"></indicator>
  </div>
</template>

<script>
export default {
  data () {
    return {
      indicator: {
        show: false,
        type: 'toast'
      }
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    showIndicator () {
      this.indicator = {
        show: true,
        type: 'toast',
        text: '加载中...'
      }
      setTimeout(() => { this.indicator.show = false }, 2000)
    },
    showModalIndicator () {
      this.indicator = {
        show: true,
        type: 'modal',
        text: '加载中...'
      }
      setTimeout(() => { this.indicator.show = false }, 2000)
    },
    showOpactiyIndicator () {
      this.indicator = {
        show: true,
        type: 'toast',
        opactiy: 0.4,
        text: '加载中...'
      }
      setTimeout(() => { this.indicator.show = false }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
