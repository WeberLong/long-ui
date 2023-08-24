<template>
  <div class="ui-page-content">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "~utils/_mixins.less";

.ui-page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #f5f6f7;
  justify-content: center;
  align-items: flex-start;
}
.ui-page-content{
  width: 100%;
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  .no-scrollbar();
}
</style>
