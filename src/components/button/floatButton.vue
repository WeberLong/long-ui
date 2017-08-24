<template>
<a href="javascript:;" class="ui-float-button" :class="classNames" ref="button">
  <icon :value="icon"></icon>
  <ripple color="rgba(255, 255, 255, .3)" trigger="button"></ripple>
</a>
</template>

<script>
import icon from '../icon/icon'
import ripple from '../ripple/ripple'
export default {
  props: {
    icon: {
      type: String,
      default: 'plus'
    },
    fixed: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  components: {
    icon,
    ripple
  },
  computed: {
    classNames () {
      let className = {}
      className['ui-float-button-' + this.color] = true
      className['ui-float-button-fixed'] = this.fixed
      return className
    }
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";

.ui-float-button{
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 56px;
  height: 56px;
  background-color: @color;
  border: none;
  appearance: none;
  text-decoration: none;
  margin: 0;
  outline: 0;
  transition-duration: 300ms;
  transform: translate3d(0, 0, 0);
  border-radius: 50%;
  color: #FFF;
  .flex-shrink(0);
  .depth(2);
  &:active {
    .depth(3);
  }
  .active-highlight()
}

.ui-float-button-fixed{
  position: fixed;
  right: 16px;
  bottom: 16px;
}

.ui-float-button-long{
  background-color: @color;
}

.ui-float-button-red{
  background-color: @red;
}

.ui-float-button-green{
  background-color: @green;
}

.ui-float-button-blue{
  background-color: @blue;
}

.ui-float-button-amber{
  background-color: @amber;
}
</style>
