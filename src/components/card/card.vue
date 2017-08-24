<template>
  <div class="ui-card">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-card .ui-list {
  .hairline-remove(top);
  .hairline-remove(bottom);
}
.ui-card {
  background: #fff;
  margin: 8px;
  position: relative;
  border-radius: 2px;
  .depth(1);
}
</style>
