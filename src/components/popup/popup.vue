<template>
  <transition :name="transition">
    <div class="ui-popup" v-if="open" ref="popup" :class="[position ? 'ui-popup-' + position : '']" :style="{'z-index': zIndex}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from 'utils/popup/index.js'
export default {
  mixins: [Popup],
  props: {
    popupTransition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      transition: this.popupTransition
    }
  },
  watch: {
    popupTransition (val, oldVal) {
      if (val === oldVal) return
      this.transition = val
    }
  },
  mounted () {
    if (this.transition !== 'popup-fade') {
      this.transition = `popup-slide-${this.position}`
    }
  }
}
</script>

<style lang="css">
.ui-popup {
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
}

.ui-popup-top {
  top: 0;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.ui-popup-right {
  top: 50%;
  right: 0;
  bottom: auto;
  left: auto;
  transform: translate3d(0, -50%, 0);
}
.ui-popup-bottom {
  top: auto;
  right: auto;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.ui-popup-left {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 0;
  transform: translate3d(0, -50%, 0);
}

.popup-slide-top-enter-active,
.popup-slide-top-leave-active,
.popup-slide-right-enter-active,
.popup-slide-right-leave-active,
.popup-slide-bottom-enter-active,
.popup-slide-bottom-leave-active,
.popup-slide-left-enter-active,
.popup-slide-left-leave-active {
  transition: transform .3s ease;
}

.popup-slide-top-enter,
.popup-slide-top-leave-to {
  transform: translate3d(-50%, -100%, 0);
}

.popup-slide-right-enter,
.popup-slide-right-leave-to {
  transform: translate3d(100%, -50%, 0);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-to {
  transform: translate3d(-50%, 100%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-to {
  transform: translate3d(-100%, -50%, 0);
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity .3s;
}

.popup-fade-enter,
.popup-fade-leave-to {
  opacity: 0;
}
</style>
