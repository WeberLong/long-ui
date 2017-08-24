<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Icons</span>
  </header-bar>
  <scroll-view>
    <content-block style="color: #ff5252">
      <icon :size="size" value="home"></icon>
      <icon :size="size" value="office"></icon>
      <icon :size="size" value="pencil"></icon>
      <icon :size="size" value="blog"></icon>
      <icon :size="size" value="books"></icon>
      <icon :size="size" value="ticket"></icon>
      <icon :size="size" value="phone"></icon>
      <icon :size="size" value="check"></icon>
      <icon :size="size" value="phone-hang-up"></icon>
      <icon :size="size" value="address-book"></icon>

      <icon :size="size" value="close"></icon>
      <icon :size="size" value="envelop"></icon>
      <icon :size="size" value="location"></icon>
      <icon :size="size" value="compass"></icon>

      <icon :size="size" value="stumbleupon"></icon>
      <icon :size="size" value="xing"></icon>
      <icon :size="size" value="explore"></icon>
      <icon :size="size" value="favorite"></icon>

      <icon :size="size" value="safari"></icon>
      <icon :size="size" value="opera"></icon>
      <icon :size="size" value="star"></icon>
      <icon :size="size" value="first"></icon>

      <icon :size="size" value="highlight_off"></icon>
      <icon :size="size" value="lock"></icon>
      <icon :size="size" value="file-openoffice"></icon>
      <icon :size="size" value="file-excel"></icon>
      <icon :size="size" value="libreoffice"></icon>
      <icon :size="size" value="html-five2"></icon>
      <icon :size="size" value="css3"></icon>
      <icon :size="size" value="menu"></icon>
      <icon :size="size" value="terminal"></icon>
      <icon :size="size" value="git"></icon>
      <icon :size="size" value="refresh"></icon>
      <icon :size="size" value="visibility"></icon>
      <icon :size="size" value="reorder"></icon>
      <icon :size="size" value="warning"></icon>
      <icon :size="size" value="search"></icon>
      <icon :size="size" value="share"></icon>
      <icon :size="size" value="codepen"></icon>
    </content-block>
  </scroll-view>
</div>
</template>

<script>
console.log(this)
console.log('999')
export default {
  data () {
    return {
      size: 30
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  },
  components: {}
}
</script>

<style lang="css">
.icon-item{
  display: inline-block;
}
</style>
