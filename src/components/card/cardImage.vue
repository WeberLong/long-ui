<template>
<div class="ui-card-image">
  <img :src="src" width="100%" height="100%"/>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
.ui-card-image{
  position: relative;
  height: auto;
  img{
    width: 100%;
    height: auto;
  }
  .ui-card-title{
    color: #fff;
    font-size: 1.6px;
    position: absolute;
    bottom: 4px;
    left: 16px;
  }
}
</style>
