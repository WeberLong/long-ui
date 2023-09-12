<template>
  <div id="app">
    <transition name="fade" mode="out-in">
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
      <router-link to="/indexList">
        <nav-menu @click.native="closeNav()" icon="sort-alpha-asc" title="Index List"></nav-menu>
      </router-link>
      <nav-divider></nav-divider>
      <router-link to="/about">
        <nav-menu @click.native="closeNav()" icon="notification" title="关于"></nav-menu>
      </router-link>
      <nav-menu @click.native="goToBlog" icon="blog" title="博客"></nav-menu>
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
  // computed: {
  //   direction () {
  //     if (JSON.parse(sessionStorage.getItem('updateDirection'))) {
  //       let direction = JSON.parse(sessionStorage.getItem('updateDirection')).direction
  //       console.log('direction: ' + direction)
  //       return direction
  //     }
  //   }
  // },

  methods: {
    closeNav () {
      this.navShow = false
    },
    goToBlog () {
      window.open('https://weberlong.github.io')
    },
  }
}
</script>

<style lang="less">
@import "~utils/reset.less";
.slide-enter-active,
.slide-leave-active {
  transition-duration: 0.3s;
  width: 100%;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0 !important;
}

.nav-drawer-shadow {
  max-width: 300px;
  box-shadow: 4px 0 18px 6px rgba(0, 0, 0, 0.12);
}
.nav-icon-logo {
  width: 80px !important;
  height: 80px !important;
  background-color: #666 !important;
  color: #fff !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.nav-demo-title {
  font-size: 16px;
  margin-top: 16px;
}
.nav-demo-sub-title {
  color: #d3d6db;
  font-size: 14px;
}
</style>
