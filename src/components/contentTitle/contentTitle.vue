<template>
  <div class="ui-content-title">
    <slot></slot>
  </div>
</template>

<style lang="less">
.ui-content-title {
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  margin: 16px 16px 16px;
  padding-top: 16px;
  font-weight: 500;
  + .ui-list, + .ui-content-block, +.ui-card {
    margin-top: 0px;
  }
}
</style>
