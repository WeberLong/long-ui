<template>
<transition name="app">
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="showNav" icon="menu"></icon-button>
    <span>long-ui</span>
    <icon-button slot="right" @click.native="goGithub" icon="github"></icon-button>
  </header-bar>
  <scroll-view ref="scroller">
    <content-block>
      long-ui 是基于 vue 开发的material design ui 库。
    </content-block>
    <template v-for="group in menus">
      <content-title>{{group.title}}</content-title>
      <list>
        <item-cell link v-for="(menu, index) in group.children" :key="index" @click.native="goTo(menu.link)">
          <item-media>
            <icon class="icon-logo" :value="menu.icon"></icon>
          </item-media>
          <item-title>
            {{menu.title}}
          </item-title>
        </item-cell>
      </list>
    </template>
  </scroll-view>
</div>
</transition>
</template>

<script>
import Vue from 'vue'
let scrollTop = 0
export default {
  data () {
    return {
      navShow: false,
      menus: [{
        title: 'Basic',
        children: [{
          icon: 'favorite_border',
          title: 'Icon',
          link: '/icon'
        }, {
          icon: 'looks_one',
          title: 'Badge',
          link: '/badge'
        }, {
          icon: 'crop_7_5',
          title: 'Button',
          link: '/button'
        }, {
          icon: 'stars',
          title: 'Float Button',
          link: '/floatButton'
        }, {
          icon: 'spinner2',
          title: 'Circular',
          link: '/circular'
        }, {
          icon: 'move-down',
          title: 'Refresh Control',
          link: '/refreshControl'
        }, {
          icon: 'move-up',
          title: 'Infinite Scroll',
          link: '/infiniteScroll'
        }, {
          icon: 'sort-alpha-asc',
          title: 'Index List',
          link: '/indexList'
        }]
      }, {
        title: 'CSS',
        children: [{
          icon: 'payment',
          title: 'Header Bar',
          link: '/headerBar'
        }, {
          icon: 'featured_video',
          title: 'Tab Bar',
          link: '/tabBar'
        }, {
          icon: 'search',
          title: 'Search Bar',
          link: '/searchBar'
        }, {
          icon: 'branding_watermark',
          title: 'Bottom Nav',
          link: '/bottomNav'
        }, {
          icon: 'settings_cell',
          title: 'SnackBar',
          link: '/snackBar'
        }, {
          icon: 'list',
          title: 'List View',
          link: '/listView'
        }, {
          icon: 'newspaper',
          title: 'Card',
          link: '/card'
        }, {
          icon: 'view_comfy',
          title: 'Grid',
          link: '/grid'
        }, {
          icon: 'file-text2',
          title: 'Content Block',
          link: '/contentBlock'
        }]
      }, {
        title: 'Forms',
        children: [{
          icon: 'border_color',
          title: 'Text Field',
          link: '/inputs'
        }, {
          icon: 'flickr2',
          title: 'Switch',
          link: '/switch'
        }, {
          icon: 'equalizer',
          title: 'Range',
          link: '/range'
        }, {
          icon: 'radio-checked',
          title: 'Checkbox And Radio',
          link: '/check'
        }, {
          icon: 'unfold_more',
          title: 'Select Field',
          link: '/select'
        }, {
          icon: 'calendar',
          title: 'Date Select',
          link: '/dateSelect'
        }]
      }, {
        title: 'Popups',
        children: [{
          icon: 'content_copy',
          title: 'Overlay',
          link: '/overlay'
        }, {
          icon: 'check_box',
          title: 'Toast',
          link: '/toast'
        }, {
          icon: 'insert_comment',
          title: 'Modal',
          link: '/modal'
        }, {
          icon: 'stack',
          title: 'Popup',
          link: '/popup'
        }, {
          icon: 'menu4',
          title: 'Action Sheet',
          link: '/actionSheet'
        }, {
          icon: 'copy',
          title: 'Popover',
          link: '/popover'
        }, {
          icon: 'spinner3',
          title: 'Indicator',
          link: '/indicator'
        }, {
          icon: 'line_weight',
          title: 'Picker',
          link: '/picker'
        }]
      }]
    }
  },
  activated () {
    Vue.nextTick(() => {
      this.$refs.scroller.$el.scrollTop = scrollTop
    })
  },
  deactivated () {
    scrollTop = this.$refs.scroller.$el.scrollTop
  },
  methods: {
    showNav () {
      this.$parent.navShow = true
      this.$emit('menuShow')
    },
    goTo (link) {
      this.$router.push(link)
    },
    goGithub () {
      window.open('https://github.com/WeberLong/long-ui')
    }
  }
}
</script>

<style lang="css">
.icon-logo{
  color: #666;
}
.ui-flex {
  display: inline-block;
  width: 100%;
  height: auto;
}
.nav-icon-logo {
  width: 80px;
  height: 80px;
  background-color: #666;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-drawer-shadow {
  box-shadow: 4px 0 18px 6px rgba(0,0,0,.12);
}

.nav-demo-title{
  font-size: 16px;
  margin-top: 16px;
}

.nav-demo-sub-title{
  color: #d3d6db;
  font-size: 14px;
}
</style>
