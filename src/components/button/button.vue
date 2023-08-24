<template>
  <a href="javascript:;" class="ui-button" ref="button" :class="buttonClass">
    <slot>
      <icon v-if="icon" :value="icon"></icon>
      <span class="ui-button-text" v-if="text">{{text}}</span>
    </slot>
    <ripple trigger="button"></ripple>
  </a>
</template>

<script>
import ripple from '../ripple/ripple'
import icon from '../icon/icon'
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    fill: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    big: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      let style = {
        'ui-button-fill': this.fill,
        'ui-button-big': this.big,
        'ui-button-raised': this.raised
      }
      if (this.color) style['color-' + this.color] = true
      return style
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
.ui-button {
  color: @color;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  appearance: none;
  background: none;
  text-decoration: none;
  text-align: center;
  margin: 0;
  white-space: nowrap;
  text-overflow:ellipsis;
  text-transform: uppercase;
  min-width: 64px;
  padding: 0 8px;
  position: relative;
  overflow: hidden;
  outline: 0;
  border: none;
  transition-duration: 300ms;
  transform: translate3d(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  &:active{
    background: @tap-color;
  }
  i.icon + span,
  i.icon + i.icon {
    margin-left: 8px;
  }

  .icon,
  .ui-button-text {
    pointer-events: none;
  }

  .icon{
    .flex-shrink(0);
  }

  .ui-button-text{
    .flex-shrink(1);
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden; word-wrap:
    break-word;
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

.ui-button-fill {
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
    color: #fff;
    background-color: @amber;
    &:active {
      background-color: darken(@amber, 8%);
    }
  }

  &.color-blue{
    color: #fff;
    background-color: @blue;
    &:active {
      background-color: darken(@blue, 8%);
    }
  }
}

.ui-button-big {
  height: 48px;
  line-height: 48px;
  border-radius: 3px;
}

.ui-button-raised {
  .depth(1);
  html:not(.watch-active-state) &:active, &.active-state {
    .depth(2);
  }
}
</style>
