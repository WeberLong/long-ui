<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>关于</span>
  </header-bar>
  <scroll-view class="about-block">
    <img src="https://avatars2.githubusercontent.com/u/20940232?v=4&u=c4312b730f23f13d16e12a384ba82a2be7156ae5&s=400" class="about-icon"/>
    <div class="about-name">WeberLong</div>
    <icon-button icon="github" :size="36" color="long" @click.native="go"></icon-button>
    <div class="about-blog" @click="goToBlog">Blog</div>
  </scroll-view>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    },
    go () {
      window.open('https://github.com/WeberLong/long-ui')
    },
    goToBlog () {
      window.open('https://weberlong.github.io')
    },
  }
}
</script>

<style lang="css" scoped>
.about-icon{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.about-name {
  font-size: 22px;
  margin: 16px 0;
}
.about-link {
  font-size: 18px;
  margin: 16px 0;
  display: inline-block;
}
.about-block{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
}
.about-blog {
  font-size: 18px;
  color: #1677ff;
  margin: 16px 0;
}
</style>
