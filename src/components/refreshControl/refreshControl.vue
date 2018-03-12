<template>
  <div class="ui-refresh-control" :style="refreshStyle" :class="refreshClass">
    <icon v-show="!refreshing && draging" value="spinner11" :style="circularStyle"></icon>
    <circular v-show="refreshing" :size="20" :border-width="2"></circular>
  </div>
</template>

<script>
import Drag from 'utils/drag'
import icon from '../icon/icon'
import circular from '../circular/circular'
import * as domUtil from 'utils/domUtil'
// import dom from 'utils/dom'
const LENGTH = 130 // 下拉最大长度
const INITY = -68 // 初始化Y轴位置
export default {
  props: {
    refreshing: {
      type: Boolean,
      default: false
    },
    trigger: {}
  },
  data () {
    return {
      y: 0,
      draging: false,
      state: 'pending'
    }
  },
  computed: {
    refreshStyle () {
      let style = {}
      if (!this.refreshing && this.draging) {
        let translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) '
        style['-webkit-transform'] = style['transform'] = translate3d
      }
      return style
    },
    circularStyle () {
      let style = {}
      if (!this.refreshing && this.draging) {
        let percentage = this.y / LENGTH
        let rotate = 'rotate(' + (360 * percentage) + 'deg)'
        let opacity = this.y / Math.abs(INITY)
        style['-webkit-transform'] = style['transform'] = rotate
        style['opacity'] = opacity
      }
      return style
    },
    refreshClass () {
      let classNames = []
      switch (this.state) {
        case 'pending':
          break
        case 'ready':
          classNames.push('ui-refresh-control-noshow')
          break
        case 'dragStart':
          classNames.push('ui-refresh-control-hide')
          break
        case 'dragAnimate':
          classNames.push('ui-refresh-control-animate')
          classNames.push('ui-refresh-control-hide')
          break
        case 'refreshAnimate':
          classNames.push('ui-refresh-control-animate')
          classNames.push('ui-refresh-control-noshow')
          break
      }
      if (this.refreshing) classNames.push('ui-refresh-control-refreshing')
      return classNames
    }
  },
  mounted () {
    this.bindDrag()
  },
  beforeDestory () {
    this.unbindDrag()
  },
  methods: {
    clearState () {
      this.state = 'ready'
      this.draging = false
      this.y = 0
    },
    getScrollEventTarget (element) {
      let currentNode = element
      while (currentNode && currentNode.tagName !== 'HTML' &&
        currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
        if (overflowY === 'scroll' || overflowY === 'auto') {
          return currentNode
        }
        currentNode = currentNode.parentNode
      }
      return window
    },
    getScrollTop (element) {
      if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
      } else {
        return element.scrollTop
      }
    },
    bindDrag () {
      if (!this.trigger) return
      const drager = this.drager = new Drag(this.trigger)
      this.state = 'ready'
      drager.start(() => {
        if (this.refreshing) return
        this.state = 'dragStart'
        const scrollTop = this.getScrollTop(this.getScrollEventTarget(this.$el))
        if (scrollTop === 0) this.draging = true
      }).drag((pos, event) => {
        const scrollTop = this.getScrollTop(this.getScrollEventTarget(this.$el))
        if (pos.y < 5 || this.refreshing || scrollTop !== 0) return // 消除误差

        if (scrollTop === 0 && !this.draging) {
          this.draging = true
          drager.reset(event)
        }

        if (this.draging && pos.y > 0) {
          event.preventDefault()
          event.stopPropagation()
        }

        this.y = pos.y / 2
        if (this.y < 0) this.y = 1
        if (this.y > LENGTH) this.y = LENGTH
      }).end((pos, event) => {
        if (!pos.y || pos.y < 5) {
          this.clearState()
          return // 消除误差
        }
        let canRefresh = this.y + INITY > 0 && this.draging
        this.state = 'dragAnimate'
        if (canRefresh) {
          this.draging = false
          this.$emit('refresh')
        } else {
          this.y = 0
          domUtil.transitionEnd(this.$el, this.clearState.bind(this))
        }
      })
    },
    unbindDrag () {
      if (!this.drager) return
      this.drager.destory()
      this.drager = null
    }
  },
  watch: {
    refreshing (val) {
      if (!val) {
        domUtil.transitionEnd(this.$el, this.clearState.bind(this))
      } else {
        this.state = 'refreshAnimate'
      }
    },
    trigger (trigger, oldTrigger) {
      if (trigger === oldTrigger) return
      this.unbindDrag()
      this.bindDrag()
    }
  },
  components: {
    icon,
    circular
  }
}
</script>

<style lang="less">
@import "~utils/_mixins.less";
@import "~utils/_vars.less";
.ui-refresh-control{
  display: flex;
  margin: 0 auto;
  width: 36px;
  height: 36px;
  color: @red;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 50%;
  .depth(2);
  position: absolute;
  left: 50%;
  margin-left: -18px;
  margin-top: 24px;
  z-index: 100;
  .icon {
    display: inline-block;
    vertical-align: middle;
  }
}

.ui-refresh-control-animate{
   transition: all 0.3s ease;
}
.ui-refresh-control-hide{
  opacity: 1;
  transform: translate3d(0, -68px, 0);
}

.ui-refresh-control-noshow{
  opacity: 0;
  transform: scale(0.01);
}

.ui-refresh-control-draging{
  opacity: 1;
}

.ui-refresh-control-refreshing {
  transform: scale(1);
  opacity: 1;
}
</style>
