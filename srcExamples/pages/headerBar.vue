<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Header Bar</span>
    </header-bar>
    <scroll-view>
      <header-bar class="header-bar-demo">
        <span>默认</span>
      </header-bar>

      <header-bar class="header-bar-demo">
        <icon-button slot="left" icon="menu"></icon-button>
        <span>左边有 icon</span>
      </header-bar>

      <header-bar class="header-bar-demo">
        <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
        <span>两边有 icon</span>
        <icon-button slot="right" icon="search"></icon-button>
        <icon-button slot="right" icon="share2"></icon-button>
      </header-bar>
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

<style lang="css" scoped>
.header-bar-demo{
  margin-top: 16px;
}
</style>
