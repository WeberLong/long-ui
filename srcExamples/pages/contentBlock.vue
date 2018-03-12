<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Content block</span>
    </header-bar>
    <scroll-view>
      <content-title>long-ui content-block</content-title>
      <content-block>
        <p>
          曾梦想仗剑走天涯
          看一看世界的繁华
          年少的心总有些轻狂
          如今你四海为家
          曾让你心疼的姑娘
          如今已悄然无踪影
          爱情总让你渴望又感到烦恼
          曾让你遍体鳞伤
        </p>
        <p>
          走在勇往直前的路上
          dilililidilililidada
          dilililidilililidada
          dilililidilililidada
          有难过也有精彩
        </p>
      </content-block>
    </scroll-view>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
