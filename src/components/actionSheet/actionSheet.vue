<template>
<transition name="actionsheet">
  <div class="ui-action-sheet" v-if="open" :style="{'z-index': zIndex}">
    <div class="ui-action-sheet-group">
      <a v-for="(action, index) in actions" :key="index" @click="actionClick(action)" ref="actionsheet-button" :class="['color-' + action.color, action.isLabel ? 'ui-action-sheet-label' : 'ui-action-sheet-button']">
        {{action.name}}
        <ripple trigger="actionsheet-button"></ripple>
      </a>
    </div>
    <div class="ui-action-sheet-group" v-if="showCancel">
      <a class="ui-action-sheet-button" href="javascript:;" @click="cancel"  ref="actionsheet-cancel">
        {{cancelText}}
        <ripple trigger="actionsheet-cancel"></ripple>
      </a>
    </div>
  </div>
</transition>
</template>

<script>
import ripple from '../ripple/ripple'
import PopupManager from 'utils/popup/manager'
import {getZIndex} from 'utils/index'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    clickOverlayClose: {
      type: Boolean,
      default: true
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
    cancel () {
      PopupManager.close(this)
      this.$emit('close')
    },
    overlayClick () {
      this.$emit('close', 'overlay')
      PopupManager.close(this)
    },
    actionClick (action) {
      if (!action.isLabel && action.click) {
        PopupManager.close(this)
        this.$emit('close')
        this.$emit('showMsgModal', action)
      }
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
    this.$emit('close')
  },
  components: {
    ripple
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-action-sheet{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFF;
  max-height: 70%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.ui-action-sheet-group {
  position: relative;
  .hairline(bottom, @border-color);
  &:last-child {
    .hairline-remove(bottom);
  }
}
.ui-action-sheet-button,
.ui-action-sheet-label {
  width: 100%;
  font-weight: normal;
  margin: 0;
  display: flex;
  position: relative;
  padding: 0 16px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui-action-sheet-label {
  font-size: 14px;
  line-height: 1;
  min-height: 57px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: @body_color;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .hairline(top, @border-color);
  &:first-child{
    .hairline-remove(top);
  }
}

.ui-action-sheet-button{
  cursor: pointer;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: @color;
  .active-highlight(@tap-color);
  .ui-ripple-ink {
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

.actionsheet-enter-active, .actionsheet-leave-active {
	transition: transform .3s;
}
.actionsheet-enter, .actionsheet-leave-to {
  transform: translate3d(0, 100%, 0);
}
</style>
