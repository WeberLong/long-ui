<template>
  <modal :click-overlay-close="false" ref="modal" :title="title">
    <div class="ui-alert-content" :class="{'info': type === 'info',
                                        'warning': type === 'warning',
                                        'success': type === 'success',
                                        'error': type === 'error'}">
      <icon :value="type === 'success' ? 'check' : type" v-if="type" :size="36"></icon>
      <span class="ui-alert-text">{{msg}}</span>
    </div>
    <ui-button slot="footer" text="确定" @click.native="sure"></ui-button>
  </modal>
</template>

<script>
import modal from './modal'
import uiButton from '../button/button'
import icon from '../icon/icon'
export default {
  props: {
    alert: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '' // 'info', 'success', 'warning', 'error'
    },
    onSure: {
      type: Function
    }
  },
  methods: {
    open () {
      this.$refs.modal.open()
    },
    close () {
      this.$refs.modal.close()
    },
    sure () {
      // this.alert = false
      this.$refs.modal.close()
      // if (this.onSure) this.onSure()
      this.$emit('sure')
    }
  },
  components: {
    modal,
    uiButton,
    icon
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
.ui-alert-content{
  display: flex;
}
.ui-alert-text{
  display: flex;
  align-items: center;
}

.ui-alert-content .icon + .ui-alert-text{
  margin-left: 12px;
}

.ui-alert-content.info .icon{
  color: @blue;
}

.ui-alert-content.success .icon{
  color: @green;
}

.ui-alert-content.warning .icon{
  color: @amber;
}

.ui-alert-content.error .icon{
  color: @red;
}
</style>
