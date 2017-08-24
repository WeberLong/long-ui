<template>
<a href="javascript:;" class="ui-bottom-nav-item" ref="tablink" :class="{'active': show}" @click="onClick()">
  <slot>
    <icon :value="icon"></icon>
    <div class="ui-bottom-nav-item-text">{{title}}</div>
  </slot>
  <ripple trigger="tablink"></ripple>
</a>
</template>

<script>
import ripple from '../ripple/ripple'
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      index: -1
    }
  },
  computed: {
    show () {
      return (this.$parent.active === this.index)
    }
  },
  methods: {
    onClick () {
      this.$parent.handlerClick(this.index)
    }
  },
  created () {
    this.$parent.renderData.push({
      title: this.title,
      active: false
    })
  },
  mounted () {
    let children = this.$parent.$children
    for (let i = 0; i < children.length; i++) {
      if (children[i].$el === this.$el) {
        this.index = i
        break
      }
    }
  },
  components: {
    ripple
  }
}
</script>

<style lang="less">
@import "~utils/_mixins.less";
@import "~utils/_vars.less";
.ui-bottom-nav-item{
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: inherit;
  .active-highlight();
  .ui-ripple-ink{
    color: @tap-color;
  }
  &.active {
    color: @blue;
    .ui-bottom-nav-item-text{
      font-size: 14px;
    }
  }
  .ui-bottom-nav-item-text{
    font-size: 12px;
    transition: color 0.3s, font-size 0.3s;
  }
  .icon {
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
}
</style>
