<template>
  <a class="ui-icon-button" href="javascript:;" :class="buttonClass" ref="button">
    <icon :value="icon" :size="size"></icon>
    <ripple trigger="button"></ripple>
  </a>
</template>

<script>
import icon from './icon'
import ripple from '../ripple/ripple'
export default {
  props: {
    icon: {
      type: String,
      require: true,
      default: ''
    },
    fill: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      let classNames = {
        'ui-icon-button-fill': this.fill
      }
      classNames['color-' + this.color] = true
      return classNames
    }
  },
  components: {
    icon,
    ripple
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-icon-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  appearance: none;
  background: none;
  text-decoration: none;
  margin: 0;
  outline: 0;
  transition-duration: 300ms;
  transform: translate3d(0, 0, 0);
  border-radius: 100%;
  color: @color;
  .flex-shrink(0);
  &:active{
    background: @tap-color;
  }
  .ui-ripple-ink{
    color: @tap-color;
  }

  &.color-red{
    color: @red;
  }

  &.color-green{
    color: @green;
  }

  &.color-amber{
    color: @amber;
  }

  &.color-blue{
    color: @blue;
  }
}

.ui-icon-button-fill {
  background-color: @long;
  color: #fff;
  .ui-ripple-ink{
    color: rgba(255,255,255,0.4);
  }
  &:active {
    background-color: darken(@long, 8%);
  }
  &.color-red{
    color: #fff;
    background-color: @red;
    &:active {
      background-color: darken(@red, 8%);
    }
  }

  &.color-green{
    color: #fff;
    background-color: @green;
    &:active {
      background-color: darken(@green, 8%);
    }
  }

  &.color-amber{
    background-color: @amber;
    color: #fff;
    &:active {
      background-color: darken(@amber, 8%);
    }
  }

  &.color-blue{
    background-color: @blue;
    color: #fff;
    &:active {
      background-color: darken(@blue, 8%);
    }
  }
}
</style>
