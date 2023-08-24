<template>
<div class="ui-item-media">
  <slot></slot>
</div>
</template>

<style lang="less">
.ui-item-media {
  padding-top: 10px;
  padding-bottom: 10px;
  + .ui-item-content{
    padding-left: 16px;
  }
  img {
    max-width: 40px;
    border-radius: 50%;
  }
}
.ui-item-cell .ui-item-media {
  padding-top: 0;
  padding-bottom: 0;
  + .ui-item-title {
    padding-left: 16px;
  }
}
</style>
