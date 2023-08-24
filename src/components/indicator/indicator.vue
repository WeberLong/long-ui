<template>
  <div class="ui-indicator" v-show="show">
    <toast center v-if="type === 'toast'">
      <circular :size="36" color="white"></circular>
      <div class="toast-text" v-if="text">{{text}}</div>
    </toast>
    <modal v-if="type === 'modal'" ref="modal" hideClose :overlay="false">
      <div class="ui-indicator-modal-content">
        <circular :size="36"></circular>
        <div class="ui-indicator-modal-text" v-if="text">
          {{text}}
        </div>
      </div>
    </modal>
    <transition name="ui-modal-scale">
      <div v-if="type === 'toast'" class="ui-indicator-overlay" :style="{'opacity': overlayOpacity}"></div>
    </transition>
  </div>
</template>

<script>

import toast from '../toast/toast'
import modal from '../modal/modal'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String, // toast / modal
      default: 'toast'
    },
    overlayOpacity: {
      default: 0.01
    }
  },
  watch: {
    show (val) {
      this.$nextTick(() => {
        if (this.type === 'modal') {
          if (val) {
            this.$refs.modal.open()
          } else {
            this.$refs.modal.close()
          }
        }
      })
    }
  },
  components: {
    toast,
    modal
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
.ui-indicator-modal-content{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ui-indicator-modal-text{
  font-size: 16px;
  color: @color;
  margin-top: 12px;
}

.ui-indicator-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .01;
  z-index: 1000;
}

.ui-modal-fade-enter-active, .ui-modal-fade-leave-active {
	transition: all .3s linear;
}
.ui-modal-fade-enter, .ui-modal-fade-leave-to {
  opacity: 0;
}
</style>
