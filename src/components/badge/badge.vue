<template>
  <em class="ui-badge" :class="classNames">
    <slot>
      {{value}}
    </slot>
  </em>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    classNames () {
      let obj = {}
      obj['ui-badge-' + this.color] = true
      return obj
    }
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
.ui-badge{
  font-size: 10px;
  display: inline-block;
  font-style: normal;
  color:#fff;
  background-color: #bbbfc4;
  padding: 3px 6px;
  border-radius: 3px;
  line-height: normal;
}

.icon .ui-badge {
  position: absolute;
  left: 100%;
  margin-left: -10px;
  padding: 1px 6px;
  top: -2px;
  line-height: normal;
  border-radius: 10px;
}

.ui-badge-long{
  background-color: @long;
}

.ui-badge-red{
  background-color: @red;
}

.ui-badge-green{
  background-color: @green;
}

.ui-badge-amber{
  background-color: @amber;
}

.ui-badge-blue{
  background-color: @blue;
}

</style>
