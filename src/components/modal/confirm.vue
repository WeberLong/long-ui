<template>
  <modal :click-overlay-close="false" ref="modal" :title="title">
    <div class="ui-confirm-content">
      <icon value="help_outline" v-if="showIcon" :size="36"></icon>
      <span class="ui-confirm-text">{{msg}}</span>
    </div>
    <Button slot="footer" text="取消" @click.native="cancel"></Button>
    <Button slot="footer" text="确定" @click.native="sure"></Button>
  </modal>
</template>

<script>
export default {
  props: {
    show: {
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
    showIcon: {
      type: Boolean,
      default: false
    },
    onSure: {
      type: Function
    },
    onCancel: {
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
    cancel () {
      // if (this.onCancel) this.onCancel()
      this.$refs.modal.close()
      this.$emit('cancel')
    },
    sure () {
      // if (this.onSure) this.onSure()
      this.$refs.modal.close()
      this.$emit('sure')
    }
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
.ui-confirm-content{
  display: flex;
  .icon {
    color: @blue;
  }
}

.ui-confirm-text{
  display: flex;
  align-items: center;
}

.ui-confirm-content .icon + .ui-confirm-text{
  margin-left: 12px;
}
</style>
