<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Float Button</span>
  </header-bar>
  <scroll-view>
    <content-block class="demo-float-button">
      <float-button icon="bin" color="long"></float-button>
      <float-button icon="pencil"></float-button>
      <float-button icon="search" color="green"></float-button>
      <float-button icon="star-full" color="amber"></float-button>
      <float-button icon="cloud" color="blue"></float-button>
      <float-button fixed></float-button>
    </content-block>
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
.demo-float-button{
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.demo-float-button .ui-float-button +  .ui-float-button{
  margin-left: 10px;
}
</style>
