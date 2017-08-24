<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>overlay</span>
  </header-bar>
  <scroll-view>
    <button-area>
      <Button text="显示 overlay" raised @click.native="toggleOverlay()"></Button>
      <Button text="显示白色的 overlay" raised @click.native="toggleWhiteOverlay()"></Button>
    </button-area>
    <overlay v-if="showWhite" :opacity="0.8" color="#FFF"  @click.native="toggleWhiteOverlay()"></overlay>
  </scroll-view>
  <overlay v-if="show" @click.native="toggleOverlay()"></overlay>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      showWhite: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    toggleOverlay () {
      this.show = !this.show
    },
    toggleWhiteOverlay () {
      this.showWhite = !this.showWhite
    }
  }
}
</script>

<style lang="css">
</style>
