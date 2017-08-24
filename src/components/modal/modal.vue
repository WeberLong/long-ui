<template>
<div>
  <transition name="ui-modal-scale">
    <div class="ui-modal" v-show="isShow" :style="{'z-index': zIndex}">
      <div class="ui-modal-header" v-if="title">
        <div class="ui-modal-title">
            {{title}}
        </div>
      </div>
      <div class="ui-modal-body">
        <slot>
          <div v-if="msg">
            {{msg}}
          </div>
        </slot>
      </div>
      <div class="ui-modal-footer" v-if="!hideClose">
        <slot name="footer">
          <Button text="关闭" @click.native="hideModel"></Button>
        </slot>
      </div>
    </div>
  </transition>
  <transition name="ui-modal-scale">
    <div class="ui-overlay" v-if="isShow" @click="hideModel" @touchmove="prevent" :style="{'z-index': overlayZIndex}"></div>
  </transition>
</div>
</template>

<script>
import {getZIndex} from 'utils/index'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    hideClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: false,
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    }
  },
  watch: {
    isShow () {
      this.$nextTick(() => {
        this[this.isShow ? 'onOpen' : 'onClose']()
      })
    }
  },
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      this.isShow = false
    },
    onOpen () {
      this.$emit('open')
    },
    onClose () {
      this.$emit('close')
    },
    hideModel () {
      this.isShow = false
    },
    prevent (event) {
      event.preventDefault()
      event.stopPropagation()
    }
  }
}
</script>

<style lang="less">
@import "~utils/_mixins.less";
@import "~utils/_vars.less";
.ui-modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  outline: none;
  width: 280px;
  margin: 0px auto;
  padding: 0;
  background-color: white;
  border-radius: 3px;
  .depth(5);
  max-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 16px;
  color: @body_color;
}

.ui-modal-header {
  display: flex;
  align-items: center;
  padding: 24px 24px 20px;
  .ui-modal-title {
    flex: 1;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: normal;
    color: @color;
  }
  + .ui-modal-body{
    padding-top: 0;
  }
}

.ui-modal-body {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    padding-bottom: 20px;
}

.ui-modal-footer {
  padding: 6px 8px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .ui-button-fill,
  .ui-button-raise {
    margin-left: 10px;
  }
}

.ui-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .4;
  z-index: 1000;
}

.ui-modal-fade-enter-active, .ui-modal-fade-leave-active {
	transition: all .3s linear;
}
.ui-modal-fade-enter, .ui-modal-fade-leave-to {
  opacity: 0;
}

</style>
