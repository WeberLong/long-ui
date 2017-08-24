<template>
<item-form :label="label" icon="insert_invitation" :no-empty="currentValue ? true : false">
  <div class="ui-date-select">
    <div class="ui-date-select-text" @click="showSelect()" :class="{'placeholder': !currentValue}">{{currentValue || placeholder}}</div>
    <icon value="insert_invitation" @click.native="showSelect()"></icon>
    <overlay v-if="show" fixed @click.native="hideSelect"></overlay>
    <date-picker @date-select-cancel="hideSelect" :type="type" :format="format" :limit="limit" @date-select-sure="select" v-if="show" :time="currentValue"></date-picker>
  </div>
</item-form>
</template>

<script>
import datePicker from './datePicker'
import overlay from '../overlay/overlay'
import icon from '../icon/icon'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'day'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    limit: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      show: false,
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    hideSelect () {
      this.show = false
    },
    showSelect () {
      this.show = true
    },
    select (time) {
      this.currentValue = time
      this.hideSelect()
      this.$emit('input', this.currentValue)
    }
  },
  components: {
    icon,
    overlay,
    'date-picker': datePicker
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-date-select{
  width: 100%;
  height: 36px;
  display: flex;
  position: relative;
  color: @color;
  align-items: center;
  .hairline(bottom, #d3d6db);
  &:after {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
    .translate3d();
    transition-duration: 200ms;
  }
  &.focus-state:after,
  &.not-empty-state:after,
  .focus-state &:after,
  .not-empty-state &:after {
    background: @red;
    .transform(scaleY(2)) !important;
  }
  > .icon-insert_invitation {
    .flex-shrink(0)
  }
}

.ui-date-select-text{
  flex: 1;
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  &.placeholder{
    color: @body_color;
  }
}
</style>
