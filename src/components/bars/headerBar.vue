<template>
  <div class="ui-header-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-header-bar {
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
  color: #666;
  background-color: @barcolor;
  font-size: 20px;
  height: @header-height;
  width: 100%;
  padding: 0 8px;
  .flex-shrink(0);
  .depth(0);
  z-index: 100;
  > .left{
    .flex-shrink(0);
    display: flex;
    flex: 0.5;
    justify-content: flex-start;
    align-items: center;
  }
  > .right{
    .flex-shrink(0);
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    align-items: center;
  }
  > .center{
    flex: 1;
    line-height: @header-height;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 16px;
    padding-right: 16px;
    white-space: nowrap;
  }

  .ui-button {
    font-size: 18px;
    background: none;
    height: 48px;
    line-height: 48px;
    color: #666;
    .ui-ripple-ink{
      color: rgba(255, 255, 255, .3);
    }
  }

  .ui-icon-button {
    background: none;
    width: 48px;
    height: 48px;
    color: #666;
    .ui-ripple-ink{
      color: rgba(255, 255, 255, .3);
    }
  }
}
</style>
