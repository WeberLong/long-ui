<template>
<a href="javascript:;" class="ui-tab-link" ref="tablink" :class="{'active': show}" @click="tabClick()">
  <slot></slot>
  <ripple trigger="tablink"></ripple>
</a>
</template>

<script>
import ripple from '../ripple/ripple'
export default {
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
    tabClick () {
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
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-tab-link{
  flex: 1;
  width: 100%;
  height: 100%;
  color: #666;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  .active-highlight();
  .ui-ripple-ink{
    color: rgba(0, 0, 0, .1);
  }
  &.active {
    color: @blue;
  }
}
</style>
