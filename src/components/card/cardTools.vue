<template>
<div class="ui-card-tools">
  <slot></slot>
</div>
</template>

<style lang="less">
@import "~utils/_mixins.less";
.ui-card-tools{
  .flex-shrink(0);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
