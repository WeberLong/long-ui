<template>
<div class="ui-card-content">
  <div class="ui-card-content-inner">
    <slot></slot>
  </div>
</div>
</template>

<style lang="less">
@import "~utils/_vars.less";
.ui-card-content{
  position: relative;
}
.ui-card-content-inner{
  padding: 16px;
  position: relative;
  color: @body_color;
  > p:first-child {
      margin-top: 0;
  }
  > p:last-child {
      margin-bottom: 0;
  }
  > .ui-list,
  > .ui-content-block {
      margin: -15px;
      width: auto;
  }
}
</style>
