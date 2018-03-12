<template>
  <div class="ui-button-area">
    <slot></slot>
  </div>
</template>

<style lang="less">
.ui-button-area {
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 0 16px;
  > .ui-button + .ui-button{
    margin-top: 16px;
  }
  width: 100%;
}
</style>
