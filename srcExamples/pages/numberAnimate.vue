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
      number: '99999999'
    }
  },
  created () {
    this._interval()
  },
  methods: {
    _random (val) {
      return Math.round((+val) + Math.random() * 100)
    },
    _interval () {
      const self = this
      setInterval(function () {
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
