<template>
<div id="app">
  <transition name="slide">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
  <nav-drawer class="nav-drawer-shadow" :open="navShow" @close="closeNav()">
    <icon-button slot="header" class="nav-icon-logo" :size="80" icon="lanyrd"></icon-button>
    
    <div slot="header" class="nav-demo-title">
      long-ui
    </div>
    <div slot="header" class="nav-demo-sub-title">
      一个基于 Vue 开发 material design 风格的移动端 UI 库
    </div>
    <nav-menu-header>For Instance</nav-menu-header>
    <router-link to="/refreshControl">
      <nav-menu @click.native="closeNav()" icon="move-down" title="Refresh Control"></nav-menu>      
    </router-link>
    <router-link to="/dateSelect">
      <nav-menu @click.native="closeNav()" icon="calendar" title="Date Select"></nav-menu>
    </router-link>
    <router-link to="/modal">
      <nav-menu @click.native="closeNav()" icon="insert_comment" title="Modal"></nav-menu>
    </router-link>
    <nav-divider></nav-divider>
    <router-link to="/about">
      <nav-menu @click.native="closeNav()" icon="notification" title="关于"></nav-menu>
    </router-link>
  </nav-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      navShow: false
    }
  },
  methods: {
    closeNav () {
      this.navShow = false
    }
  }
}
</script>

<style lang="less">
@import "~utils/reset.less";
.slide-enter-active, .slide-leave-active {
	transition-duration: .3s;
  width: 100%;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
}
.app-enter-active, .app-leave-active {
	transition: opacity .6s;
}
.app-enter, .app-leave-to {
  opacity: 0;
}
</style>
