import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => {
        require(['../pages/home'], resolve)
      }
    },
    {
      path: '/icon',
      name: 'icon',
      component: (resolve) => {
        require(['../pages/icon'], resolve)
      }
    },
    {
      path: '/badge',
      name: 'badge',
      component: (resolve) => {
        require(['../pages/badge'], resolve)
      }
    },
    {
      path: '/button',
      name: 'button',
      component: (resolve) => {
        require(['../pages/button'], resolve)
      }
    },
    {
      path: '/floatButton',
      name: 'floatButton',
      component: (resolve) => {
        require(['../pages/floatButton'], resolve)
      }
    },
    {
      path: '/circular',
      name: 'circular',
      component: (resolve) => {
        require(['../pages/circular'], resolve)
      }
    },
    {
      path: '/refreshControl',
      name: 'refreshControl',
      component: (resolve) => {
        require(['../pages/refreshControl'], resolve)
      }
    },
    {
      path: '/infiniteScroll',
      name: 'infiniteScroll',
      component: (resolve) => {
        require(['../pages/infiniteScroll'], resolve)
      }
    },
    {
      path: '/indexList',
      name: 'indexList',
      component: (resolve) => {
        require(['../pages/indexList'], resolve)
      }
    },
    {
      path: '/numberAnimate',
      name: 'numberAnimate',
      component: (resolve) => {
        require(['../pages/numberAnimate'], resolve)
      }
    },
    {
      path: '/headerBar',
      name: 'headerBar',
      component: (resolve) => {
        require(['../pages/headerBar'], resolve)
      }
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: (resolve) => {
        require(['../pages/tabbar'], resolve)
      }
    },
    {
      path: '/searchBar',
      name: 'searchBar',
      component: (resolve) => {
        require(['../pages/searchBar'], resolve)
      }
    },
    {
      path: '/bottomNav',
      name: 'bottomNav',
      component: (resolve) => {
        require(['../pages/bottomNav'], resolve)
      }
    },
    {
      path: '/snackBar',
      name: 'snackBar',
      component: (resolve) => {
        require(['../pages/snackBar'], resolve)
      }
    },
    {
      path: '/listView',
      name: 'listView',
      component: (resolve) => {
        require(['../pages/listView'], resolve)
      }
    },
    {
      path: '/card',
      name: 'card',
      component: (resolve) => {
        require(['../pages/card'], resolve)
      }
    },
    {
      path: '/grid',
      name: 'grid',
      component: (resolve) => {
        require(['../pages/grid'], resolve)
      }
    },
    {
      path: '/contentBlock',
      name: 'contentBlock',
      component: (resolve) => {
        require(['../pages/contentBlock'], resolve)
      }
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: (resolve) => {
        require(['../pages/inputs'], resolve)
      }
    },
    {
      path: '/switch',
      name: 'switch',
      component: (resolve) => {
        require(['../pages/switch'], resolve)
      }
    },
    {
      path: '/range',
      name: 'range',
      component: (resolve) => {
        require(['../pages/range'], resolve)
      }
    },
    {
      path: '/check',
      name: 'check',
      component: (resolve) => {
        require(['../pages/check'], resolve)
      }
    },
    {
      path: '/select',
      name: 'select',
      component: (resolve) => {
        require(['../pages/select'], resolve)
      }
    },
    {
      path: '/dateSelect',
      name: 'dateSelect',
      component: (resolve) => {
        require(['../pages/dateSelect'], resolve)
      }
    },
    {
      path: '/overlay',
      name: 'overlay',
      component: (resolve) => {
        require(['../pages/overlay'], resolve)
      }
    },
    {
      path: '/toast',
      name: 'toast',
      component: (resolve) => {
        require(['../pages/toast'], resolve)
      }
    },
    {
      path: '/modal',
      name: 'modal',
      component: (resolve) => {
        require(['../pages/modal'], resolve)
      }
    },
    {
      path: '/popup',
      name: 'popup',
      component: (resolve) => {
        require(['../pages/popup'], resolve)
      }
    },
    {
      path: '/actionSheet',
      name: 'actionSheet',
      component: (resolve) => {
        require(['../pages/actionSheet'], resolve)
      }
    },
    {
      path: '/popover',
      name: 'popover',
      component: (resolve) => {
        require(['../pages/popover'], resolve)
      }
    },
    {
      path: '/indicator',
      name: 'indicator',
      component: (resolve) => {
        require(['../pages/indicator'], resolve)
      }
    },
    {
      path: '/picker',
      name: 'picker',
      component: (resolve) => {
        require(['../pages/picker'], resolve)
      }
    },
    {
      path: '/about',
      name: 'about',
      component: (resolve) => {
        require(['../pages/about'], resolve)
      }
    }
  ]
})
