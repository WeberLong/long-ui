<template>
  <label class="ui-radio" :class="{'label-left': labelLeft}" @change="$emit('change', currentValue)">
    <input type="radio" :name="name" :value="nativeValue" v-model="currentValue">
    <div class="ui-radio-label" v-if="label && labelLeft">{{label}}</div>
    <div class="ui-radio-icon"></div>
    <div class="ui-radio-label" v-if="label && !labelLeft">{{label}}</div>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    nativeValue: {
      type: String,
      default: ''
    },
    value: {},
    label: {
      type: String,
      default: ''
    },
    labelLeft: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-radio {
  position: relative;
  display: inline-block;;
  height: 36px;
  line-height: 36px;
  margin-right: 32px;
  input[type="radio"] {
    display: none;
    &:checked{
      + .ui-radio-icon,
      + .ui-radio-label + .ui-radio-icon{
        border-color: @red;
        &:after{
          transform: scale(1);
        }
      }
    }
  }
  * {
    pointer-events: none;
  }
  &.label-left{

    .ui-radio-label {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  &:last-child{
    margin-right: 0;
  }
}

.ui-radio-icon {
  width: 20px;
  height: 20px;
  border-radius: 36px;
  border-width: 2px;
  border-style: solid;
  border-color: @body_color;
  background: transparent;
  transition-duration: 300ms;
  position: relative;
  &:after {
    content:' ';
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -5px;
    margin-top: -5px;
    background-color: @red;
    border-radius: 100%;
    transform: scale(0);
    transition-duration: 300ms;
  }
}

.ui-radio-label{
  color: @color;
  font-size: 16px;
  margin-left: 8px;
  margin-right: auto;
}

.ui-radio-label,
.ui-radio-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
