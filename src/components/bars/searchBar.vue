<template>
  <div class="ui-search-box" :class="{'ui-search-fixed':isFixed}" :style="{top: isFixed ? top : '', position: fixPosition }">
    <div class="ui-search-bar" :class="{'ui-search-bar_focusing': !isCancel || currentValue}">
      <slot name="left"></slot>
      <form class="ui-search-bar__form" @submit.prevent="$emit('on-submit', value)" action=".">
        <div class="ui-search-mask" @click="touch" v-show="!isFixed && autoFixed"></div>
        <div class="ui-search-bar__box">
          <icon class="ui-icon-search" :size="14" value="search"></icon>
          <input type="search" class="ui-search-bar__input" :id="`search_input_${uuid}`" :placeholder="placeholder" autocomplete="off" :required="required" v-model="currentValue" ref="input"
          @focus="onFocus"
          @blur="onBlur"/>
          <icon class="ui-icon-clear" :size="20" value="cancel-circle" @click.native="clear" v-show="currentValue"></icon>
        </div>
        <label :for="`search_input_${uuid}`" class="ui-search-bar__label" v-show="!isFocus && !value">
          <icon class="ui-icon-search" :size="14" value="search"></icon>
          <span>{{placeholder}}</span>
        </label>
      </form>
      <a href="javascript:" class="ui-search-bar__cancel-btn" @click="cancel">{{cancelText}}</a>
      <slot name="right"></slot>
    </div>

    <item-cell class="ui-search_show" v-show="isFixed" v-for="(item, index) in results" :key="index" @click="handleResultClick(item)">
      <slot></slot>
      <item-title>{{item.title}}</item-title>
    </item-cell>
  </div>
</template>

<script>
import icon from '../icon/icon'
import itemCell from '../list/itemCell'
import itemTitle from '../list/itemTitle'
export default {
  name: 'search',
  props: {
    required: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    cancelText: {
      type: String,
      default: '取消'
    },
    value: {
      type: String,
      default: ''
    },
    results: {
      type: Array,
      default () {
        return []
      }
    },
    autoFixed: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: '0px'
    },
    position: {
      type: String,
      default: 'fixed'
    },
    autoScrollToTop: Boolean
  },
  components: {
    icon,
    itemCell,
    itemTitle
  },
  created () {
    if (this.value) {
      this.currentValue = this.value
    }
    console.log(`uuid=${this.uuid}`)
  },
  computed: {
    fixPosition () {
      if (this.isFixed) {
        return this.position === 'absolute' ? 'absolute' : 'fixed'
      }
      return 'static'
    }
  },
  methods: {
    clear () {
      this.currentValue = ''
      this.isFocus = true
      this.setFocus()
      if (this.autoFixed && !this.isFixed) {
        this.isFixed = true
      }
    },
    cancel () {
      this.isCancel = true
      this.currentValue = ''
      this.isFixed = false
      this.$emit('on-cancel')
    },
    handleResultClick (item) {
      this.$emit('result-click', item) // just for compatibility
      this.$emit('on-result-click', item)
      this.isCancel = true
      this.isFixed = false
    },
    touch () {
      this.isCancel = false
      if (this.autoFixed) {
        this.isFixed = true
      }
      this.$emit('on-touch')
    },
    setFocus () {
      this.$refs.input.focus()
    },
    setBlur () {
      this.$refs.input.blur()
    },
    onFocus () {
      this.isFocus = true
      this.$emit('on-focus')
      this.touch()
    },
    onBlur () {
      this.isFocus = false
    }
  },
  data () {
    return {
      currentValue: '',
      isCancel: true,
      isFocus: false,
      isFixed: false,
      uuid: Math.random().toString(36).substring(3, 8)
    }
  },
  watch: {
    isFixed (val) {
      if (val === true) {
        this.setFocus()
        this.isFocus = true

        if (this.autoScrollToTop) {
          setTimeout(() => {
            window.scrollTo(0, 0)
          }, 150)
        }
      }
    },
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  }
}
</script>

<style lang="less">
.ui-search-fixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(5px);
}
.ui-search-box {
  width: 100%;
}
.ui-search_show {
  margin-top: 0!important;
  overflow-y: auto;
  max-height: 400px;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    display: none;
  }
}
.ui-search-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 100%;
  z-index: 5;
}

.ui-search-bar {
    position: relative;
    padding: 8px 10px;
    display: flex;
    box-sizing: border-box;
    background-color: #EFEFF4;
    &:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #D7D6DC;
        color: #D7D6DC;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D7D6DC;
        color: #D7D6DC;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    &.ui-search-bar_focusing{
        .ui-search-bar__cancel-btn{
            display: block;
            color: #108EE9;
        }
        .ui-search-bar__label{
            display: none;
        }
    }
}
.ui-search-bar__form {
    position: relative;
    flex: auto;
    background-color: #EFEFF4;
    &:after{
        content: '';
        position: absolute;
        left: 0;
        top:0;
        width: 200%;
        height: 200%;
        transform: scale(.5);
        transform-origin: 0 0;
        border-radius: 10px;
        border: 1px solid #E6E6EA;
        box-sizing: border-box;
        background: #FFFFFF;
    }
}
.ui-search-bar__box {
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
    .ui-search-bar__input {
        padding: 4px 0;
        width: 100%;
        height: 20/14em;
        border: 0;
        font-size: 14px;
        line-height: 20/14em;
        box-sizing: content-box;
        background: transparent;
        &:focus {
            outline: none;
        }
    }
    .ui-icon-search {
        position: absolute;
        left: 10px;
        top: 0;
        line-height: 28px;
        color: #B2B2B2;
    }
    .ui-icon-clear {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 10px;
        line-height: 28px;
        color: #B2B2B2;
    }
}
.ui-search-bar__label {
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    z-index: 2;
    border-radius: 3px;
    text-align: center;
    color: #9B9B9B;
    background: #FFFFFF;
    span {
        display: inline-block;
        font-size: 14px;
        vertical-align: middle;
    }
    .ui-icon-search {
        margin-right: 5px;
        color: #B2B2B2;
    }
}
.ui-search-bar__cancel-btn {
    display: none;
    margin-left: 10px;
    line-height: 28px;
    color: #09BB07;
    white-space: nowrap;
}
.ui-search-bar__input:not(:valid) ~ .ui-icon-clear {
    display: none;
}

//干掉input[search]默认的clear button
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    display: none;
}
</style>
