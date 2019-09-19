<template>
<div class="ui-page">
  <header-bar class="header-fix">
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Refresh Control</span>
    <icon-button slot="right" @click.native="refresh" icon="spinner11" :class="[refreshing ? 'ui-refresh-animate' : '']"></icon-button>
  </header-bar>
  <scroll-view ref="trigger" class="scroll-content">
    <refresh-control @refresh="refresh" :trigger="trigger" :refreshing="refreshing"></refresh-control>
    <content-block>
      <p class="refresh-desc">
         按住 - 下拉 - 释放可以刷新数据
      </p>
    </content-block>
    <list>
      <item-cell v-for="(item, index) in items" :key="index">
        <item-title>
          {{item}}
        </item-title>
      </item-cell>
    </list>
  </scroll-view>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: ['1', '2', '3', '5', '6', '7', '8', '9', '10'],
      end: 10,
      refreshing: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  methods: {
    back () {
      window.history.back()
    },
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
        var arr = []
        for (let i = this.end; i < this.end + 10; i++) {
          arr.push(String(i + 1))
        }
        this.end += 10
        this.items = this.items.concat(arr)
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.header-fix {
  position: fixed;
  top: 0;
  z-index: 999;
}
.scroll-content {
  padding-top: 54px;
}
.refresh-desc {
  text-align: center;
}
.ui-refresh-animate {
  -webkit-animation: refresh 0.8s linear infinite;
  animation: refresh 0.8s linear infinite;
}
@-webkit-keyframes refresh {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    background:white;
    color:blue;
  }
}
@keyframes refresh {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
