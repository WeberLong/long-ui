<template>
  <div class="ui-buttons-row">
    <slot></slot>
  </div>
</template>

<style lang="less">
.ui-buttons-row {
  align-self: center;
  display: flex;
  margin: 1em 0;
  .ui-button {
    margin-left: 16px;
    width: 100%;
    flex: 1;
  }
  .ui-button:first-child {
    margin-left: 0;
  }
}
</style>
