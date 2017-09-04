<template>
<div class="ui-page">
    <header-bar class="demo-bar">
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Search Bar</span>
    </header-bar>
    <div class="demo-content">
      <img src="../assets/logo.png" style="width:100%">
      <!-- <img src="http://vuejs.org/images/logo.png" style="width: 100%"> -->
      <search-bar
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="54px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search-bar>
      <button-area>
        <Button text="set focus" fill color="blue" raised ref="button" @click.native="setFocus"></Button>
      </button-area>
      <toast v-if="toasts.show" :text="toasts.text" :center="toasts.center"></toast>
      <alert :title="alert.title" :type="alert.type" ref="alert" :msg="alert.msg"></alert>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: {
        show: false
      },
      toasts: [],
      results: [],
      value: 'test'
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      this.alert = {
        title: '标题',
        msg: 'you click the result item: ' + JSON.stringify(item),
        show: true,
        type: 'info'
      }
      this.$refs.alert.open()
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.toasts.push({
        show: true,
        text: 'on submit',
        center: true
      })
      setTimeout(() => { this.toasts.show = false }, 2000)
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style lang="less" scoped>
  .demo-bar {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;
  }
  .demo-content {
    padding-top: 54px;
  }
</style>

