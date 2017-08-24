<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Search Bar</span>
    </header-bar>
    <search-bar class="seach-bar" :focus="focus" @focus-change="handleFocusChange"></search-bar>
    <scroll-view>
      <overlay v-if="focus"></overlay>
    </scroll-view>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    },
    handleFocusChange (status) {
      console.log('handleFocusChange')
      console.log(status)
      this.focus = status
    }
  },
  data () {
    return {
      focus: false
    }
  }
}
</script>

<style lang="css">
  .seach-bar {
    margin-top: 20px;
    background-color: #7e848c!important;
  }
</style>
