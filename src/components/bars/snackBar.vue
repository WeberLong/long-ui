<template>
<transition name="ui-snack">
  <div class="ui-snack-bar">
    <div class="ui-snack-message">
      {{message}}
    </div>
    <ui-button v-if="action" :text="action" @click.native="actionClick" :color="actionColor"></ui-button>
  </div>
</transition>
</template>

<script>
import uiButton from '../button/button'
export default {
  props: {
    action: {
      type: String
    },
    actionColor: {
      type: String,
      default: 'red'
    },
    message: {
      type: String
    }
  },
  methods: {
    actionClick () {
      this.$emit('action-click')
    }
  },
  components: {
    uiButton
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-snack-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.87);
  padding: 0px 24px;
  min-height: 48px;
}

.ui-snack-message {
  display: flex;
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
}
.ui-snack-bar{
  color: #FFF;
  .ui-button {
    .ui-ripple-ink{
      color: rgba(255, 255, 255, .3);
    }
  }
}

.ui-snack-enter-active, .ui-snack-leave-active {
	transition: transform .3s;
  backface-visibility: hidden;
}
.ui-snack-enter, .ui-snack-leave-to {
  transform: translate3d(0, 100%, 0);
}
</style>
