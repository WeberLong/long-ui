<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Circular</span>
  </header-bar>
  <scroll-view>
    <div class="ui-content-block">
      <circular style="margin-left: 16px;"></circular>
      <circular style="margin-left: 16px;" color="green" :size="36"></circular>
      <circular style="margin-left: 16px;" color="amber" :size="48"></circular>
    </div>
  </scroll-view>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
