<template>
<transition name="ui-overlay-fade">
  <div class="ui-overlay" @click="handlerClick" @touchmove="prevent" :style="style"></div>
</transition>
</template>
<script>
import {getZIndex} from 'utils/index.js'
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    }
  },
  computed: {
    style () {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  },
  methods: {
    prevent (event) {
      event.preventDefault()
      event.stopPropagation()
    },
    handlerClick () {
      if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>
<style lang="less">
.ui-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .4;
  z-index: 1000;
}


// .ui-overlay-fade-transition {
//   transition: all .3s linear;
//   &.ui-overlay-fade-enter,
//   &.ui-overlay-fade-leave {
//     opacity: 0 !important;
//   }
// }

.ui-overlay-fade-enter-active, .ui-overlay-fade-leave-active {
	transition: all .3s linear;
}
.ui-overlay-fade-enter, .ui-overlay-fade-leave-to {
  opacity: 0 !important;
}
</style>
