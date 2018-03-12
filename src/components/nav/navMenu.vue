<template>
<a href="javascript:;" class="ui-nav-menu" ref="menu">
  <div class="ui-nav-menu-icon">
    <icon :value="icon"></icon>
  </div>
  <div class="ui-nav-menu-content">
    <div class="ui-nav-menu-title">
      {{title}}
    </div>
    <div class="ui-nav-menu-after">
      {{after}}
    </div>
  </div>
  <ripple color="rgba(0, 0, 0, .1)" trigger="menu"></ripple>
</a>
</template>

<script>
import icon from '../icon/icon'
import ripple from '../ripple/ripple'
export default {
  props: {
    icon: {
      type: String,
      default: 'brightness_1'
    },
    title: {
      type: String,
      default: ''
    },
    after: {
      type: String,
      default: ''
    }
  },
  components: {
    icon,
    ripple
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";

.ui-nav-menu{
  display: flex;
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  position: relative;
  align-items: center;
  color: @body_color;
  &:active{
    color: @color;
  }
  .active-highlight(@tap-color);
}

.ui-nav-menu-icon{
  width: 40px;
  display: flex;
  align-items: center;
  color: @color;
}

.ui-nav-menu-content{
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ui-nav-menu-title{
  font-size: 16px;
  .flex-shrink(10);
}

.ui-nav-menu-after{
  margin-left: auto;
  font-size: 14px;
}
</style>
