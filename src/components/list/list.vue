<template>
  <div class="ui-list">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-list {
  margin: 16px 0;
  // &:first-child {
  //   margin-top: 0;
  // }
  width: 100%;
  background: #FFF;
  .hairline(top, @border-color);
  .hairline(bottom, @border-color);
  position: relative;
  .ui-item:last-child{
    .hairline-remove(bottom);
  }
}

</style>
