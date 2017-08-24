<template>
<div class="ui-form-list">
  <slot></slot>
</div>
</template>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-form-list{
  margin: 16px 0;
  &:first-child {
    margin-top: 0;
  }
  width: 100%;
  background: #FFF;
  .hairline(top, @border-color);
  position: relative;
  .ui-content-title +&{
    margin-top: 0px;
  }
}
</style>
