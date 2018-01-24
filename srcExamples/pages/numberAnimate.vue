<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>numberAnimate</span>
  </header-bar>
  <scroll-view>
    <div class="ui-content-block">
      <div class="demo-number-animate">
        <number-animate :num="number" :speed="2000" :separator="','"></number-animate>
      </div>
    </div>
  </scroll-view>
</div>
</template>

<script>
export default {
  data () {
    return {
      number: '66666666',
      timer: null
    }
  },
  beforeCreate () {
    console.log('1.1 beforeCreate >>>>>>>>>>>>>>, 创建前的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  created () {
    console.log('1.2 create >>>>>>>>>>>>>>>>, 创建完成的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  beforeMount () {
    console.log('2.1 beforeMount >>>>>>>>>>>>>>, 挂载前的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log(this.$data)
    console.log(this.$el)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  mounted () {
    console.log('2.2 mounted >>>>>>>>>>>>>>, 挂载完成的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log(this.$data)
    console.log(this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  beforeUpdate () {
    console.log('3.1 beforeUpdate >>>>>>>>>>>>>>, 更新前的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  updated () {
    console.log('3.2 updated >>>>>>>>>>>>>>, 更新完成的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  beforeDestroy () {
    console.log('4.1 beforeDestroy >>>>>>>>>>>>>>, 销毁前的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  destroyed () {
    console.log('4.2 destroyed >>>>>>>>>>>>>>, 销毁完成的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
  },
  activated () {
    console.log('5.1 activated >>>>>>>>>>>>>>, 激活完成的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
    this._interval()
  },
  deactivated () {
    console.log('5.2 deactivated >>>>>>>>>>>>>>, 停用完成的状态')
    console.log('%c%s', 'color: red', '$data: ' + this.$data)
    console.log('%c%s', 'color: red', '$el: ' + this.$el)
    console.log('%c%s', 'color: red', 'number: ' + this.$number)
    window.clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    _random (val) {
      return Math.round((+val) + Math.random() * 100)
    },
    _interval () {
      const self = this
      this.timer = setInterval(function () {
        self.number = '' + self._random(self.number)
      }, 3500)
    },
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
.demo-number-animate {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #FFB510;
}
</style>
