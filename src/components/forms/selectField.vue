<template>
  <item-form :label="label" :icon="icon" :focus="currentFocus" :no-empty="selectText ? true : false">
    <div class="ui-select" ref="select">
      <div class="ui-select-text" @click="toggleSelect()" :class="{'placeholder': !selectText}">{{selectText || placeholder}}</div>
      <icon value="arrow_drop_down"  @click.native="toggleSelect()"></icon>
      <div class="ui-select-drop-down" :class="{'up': up}" v-show="currentFocus">
        <ul class="ui-select-options">
          <li v-for="option in options">
            <a href="javascript:;" ref="option" @click="select(option)"
              class="ui-select-option" :class="{'selected': isSelect(option)}">
              <div class="ui-select-option-content">
                {{option.text || option}}
              </div>
              <icon value="check"></icon>
              <ripple trigger="option"></ripple>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </item-form>
</template>

<script>
import itemForm from './itemForm'
import icon from '../icon/icon'
import ripple from '../ripple/ripple'
import * as domUtil from 'utils/domUtil'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    focus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    multi: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, Object, Number, String]
    },
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      up: false,
      currentValue: this.value,
      currentFocus: this.focus
    }
  },
  computed: {
    selectText () {
      let text = []
      this.options.forEach((item) => {
        if (this.isSelect(item)) {
          text.push(item.text || item)
        }
      })
      return text.join(',')
    }
  },
  mounted () {
    this.addListener()
  },
  beforeDestroy () {
    this.removeListener()
  },
  methods: {
    isSelect (val) {
      return this.multi ? this.currentValue && this.currentValue.indexOf(val) !== -1 : this.currentValue === val
    },
    toggleSelect () {
      this.currentFocus = !this.currentFocus
    },
    select (val) {
      if (this.multi) {
        if (!this.currentValue) this.currentValue = []
        const i = this.currentValue.indexOf(val)
        if (i !== -1) {
          this.currentValue.splice(i, 1)
        } else {
          this.currentValue.push(val)
        }
      } else {
        this.currentValue = val
        this.hideSelect()
      }
      this.$emit('input', this.currentValue)
    },
    hideSelect () {
      this.currentFocus = false
    },
    addListener () {
      this.windowListener = (e) => {
        if (!this.$refs.select.contains(e.target)) {
          this.hideSelect()
        }
      }
      window.addEventListener('click', this.windowListener, false)
    },
    removeListener () {
      if (this.windowListener) {
        window.removeEventListener('click', this.windowListener, false)
        this.windowListener = null
      }
    }
  },
  watch: {
    focus (val) {
      this.currentFocus = val
    },
    currentFocus (value) {
      if (value) {
        let stop = domUtil.getOffset(this.$refs.select).top
        let wh = window.innerHeight
        this.up = wh - stop < 260
        this.$emit('focus-change', value)
      }
    },
    value (val) {
      this.currentValue = val
    },
    currentValue (val, oldVal) {
      if (val === oldVal) return
      this.$emit('input', val)
    }
  },
  components: {
    'item-form': itemForm,
    icon,
    ripple
  }
}
</script>

<style lang="less">
@import "~utils/_vars.less";
@import "~utils/_mixins.less";
.ui-select{
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
  > .icon-arrow_drop_down {
    .flex-shrink(0)
  }
}

.ui-select-text{
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

.ui-select-drop-down{
  position: absolute;
  width: 100%;
  top: 36px;
  left: 0;
  .depth(2);
  z-index: 20;
  background-color: #FFF;
  &.up{
    top: auto;
    bottom: 36px;
  }
}
.ui-select-options{
  margin: 0;
  list-style: none;
  padding: 0;
  max-height: 216px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.ui-select-option{
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 6px 12px;
  min-height: 36px;
  color: @color;
  position: relative;
  .ui-ripple-ink{
    color: rgba(0, 0, 0, .1);
  }
  &.selected{
    color: @red;
    > .icon{
      display: inline-block;
      vertical-align: middle;
    }
  }
  > .icon {
    display: none;
  }
}

.ui-select-option-content{
  flex: 1;
}
</style>
