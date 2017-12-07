<template>
<transition name="ui-toast">
  <div class="ui-toast" :style="{'z-index': zIndex}" :class="{'ui-toast-center': center}">
    <slot>
      <icon v-if="icon" :value="icon" :size="36"></icon>
      <div class="ui-toast-text">{{text}}</div>
    </slot>
  </div>
</transition>
</template>

<script>
import {getZIndex} from 'utils/index'
import icon from '../icon/icon'
import circular from '../circular/circular'
export default {
  data () {
    return {
      zIndex: getZIndex()
    }
  },
  props: {
    center: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  components: {
    icon,
    circular
  }
}
</script>

<style lang="less">
.ui-toast{
  position: fixed;
  left: 50%;
  bottom: 50px;
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  padding: 10px;
  z-index: 1000;
  transform: translate3d(-50%, 0, 0);
  .ui-toast-text{
    font-size: 14px;
    display: block;
    text-align: center;
  }
  &.ui-toast-center {
    top: 50%;
    bottom: auto;
    transform: translate3d(-50%, -50%, 0);
  }
}

// .ui-toast-transition {
//   -webkit-transition: opacity .3s linear;
//   transition: opacity .3s linear;
//   &.ui-toast-enter,
//   &.ui-toast-leave {
//     opacity: 0;
//   }
// }
.ui-toast-enter-active, .ui-toast-leave-active {
	-webkit-transition: opacity .3s linear;
  transition: opacity .3s linear;
}
.ui-toast-enter, .ui-toast-leave-to {
  opacity: 0;
}
</style>
