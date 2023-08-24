<template>
  <transition name="slider-left">
    <div class="ui-nav-drawer" v-show="open" :style="{'z-index': zIndex}">
      <div class="ui-nav-drawer-header">
        <slot name="header"></slot>
      </div>
      <div class="ui-nav-drawer-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import PopupManager from 'utils/popup/manager'
import {getZIndex} from 'utils/index'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String]
    }
  },
  data () {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    }
  },
  computed: {
    overlay () {
      return this.open
    }
  },
  watch: {
    open (val) {
      if (val) {
        PopupManager.open(this)
      } else {
        PopupManager.close(this)
      }
    }
  },
  mounted () {
    if (this.open) {
      PopupManager.open(this)
    }
  },
  methods: {
    overlayClick () {
      this.$emit('close', 'overlay')
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";

.ui-nav-drawer{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  -webkit-overflow-scrolling: touch;
}
.ui-nav-drawer-header{
  background-color: @body_color;
  color: #FFF;
  width: 100%;
  display: flex;
  padding: 16px 16px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.ui-nav-drawer-content{
  width: 100%;
  flex: 1;
  background-color: #FFF;
  padding-top: 10px;
  color: @body_color;
}

.slider-left-enter-active, .slider-left-leave-active {
  transition: transform .3s;
  backface-visibility: hidden;
}
.slider-left-enter, .slider-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
