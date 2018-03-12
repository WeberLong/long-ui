<template>
  <div class="ui-item-title-after">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-item-title-after{
  .flex-shrink(0);
  font-size: 14px;
  color: @body_color;
  display: block;
}
</style>
