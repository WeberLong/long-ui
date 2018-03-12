# long-ui

#### 一个基于Vue2.x的移动端UI long-ui

Demo: <a href="http://long.httpds.com/"> http://long.httpds.com/ </a>

![](./static/image/demo-long-ui-code.png)


## 技术栈
vue2 + vue-router + webpack + icomoon + less + jsx
- MVVM框架：[Vue 2.0](https://cn.vuejs.org/)
- 脚手架：[vue-cli](https://github.com/vuejs/vue-cli)
- 构建工具：webpack
- 前端路由：[vue-router](https://router.vuejs.org/)
- 图标icons: [icomoon](https://icomoon.io/#home)
- 代码风格检查：eslint
- 源码：es6


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

# build for production with minification
npm run examples

```


## 项目结构
``` bash
.
├── README.md
├── build                                           // webpack配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── examples.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.examples.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist                                            // 打包后的源文件
│   └── static
│       ├── fonts
│       │   ├── ico-long.1338e18.woff
│       │   ├── ico-long.1d061c6.eot
│       │   └── ico-long.56d510b.ttf
│       ├── img
│       │   └── ico-long.e258451.svg
│       ├── long-ui.css
│       └── long-ui.js
├── distExamples                                    // 打包后的demo文件
│   ├── index.html
│   └── static
│       ├── css
│       ├── fonts
│       ├── image
│       ├── img
│       └── js
├── index.html
├── package.json                                    // 项目配置文件
├── src                                             // 编写组件的文件
│   ├── assets
│   │   ├── fonts
│   │   │   ├── ico-long.eot
│   │   │   ├── ico-long.svg
│   │   │   ├── ico-long.ttf
│   │   │   └── ico-long.woff
│   │   └── style.css
│   ├── components
│   │   ├── actionSheet
│   │   ├── badge
│   │   ├── bars
│   │   ├── bottomNav
│   │   ├── button
│   │   ├── card
│   │   ├── circular
│   │   ├── contentBlock
│   │   ├── contentTitle
│   │   ├── forms
│   │   ├── grid
│   │   ├── icon
│   │   ├── indexList
│   │   ├── indicator
│   │   ├── infiniteScroll
│   │   ├── list
│   │   ├── modal
│   │   ├── nav
│   │   ├── numberAnimate
│   │   ├── overlay
│   │   ├── picker
│   │   ├── popover
│   │   ├── popup
│   │   ├── refreshControl
│   │   ├── ripple
│   │   ├── scrollView
│   │   └── toast
│   ├── index.js
│   └── utils                                       // 工具箱文件夹
│       ├── _mixins.less
│       ├── _vars.less
│       ├── classList.js
│       ├── dom.js
│       ├── domUtil.js
│       ├── drag.js
│       ├── flexible.js
│       ├── index.js
│       ├── iscroll-probe.js
│       ├── normalize.css
│       ├── popup
│       ├── reset.less
│       └── translate.js
├── srcExamples                                     // 案例文件夹
│   ├── App.vue
│   ├── assets
│   ├── index.html
│   ├── main.js
│   ├── pages
│   │   ├── about.vue
│   │   ├── actionSheet.vue
│   │   ├── badge.vue
│   │   ├── bottomNav.vue
│   │   ├── button.vue
│   │   ├── card.vue
│   │   ├── check.vue
│   │   ├── circular.vue
│   │   ├── contentBlock.vue
│   │   ├── dateSelect.vue
│   │   ├── floatButton.vue
│   │   ├── headerBar.vue
│   │   ├── home.vue
│   │   ├── icon.vue
│   │   ├── indexList.vue
│   │   ├── indicator.vue
│   │   ├── infiniteScroll.vue
│   │   ├── inputs.vue
│   │   ├── listView.vue
│   │   ├── modal.vue
│   │   ├── numberAnimate.vue
│   │   ├── overlay.vue
│   │   ├── picker.vue
│   │   ├── popover.vue
│   │   ├── popup.vue
│   │   ├── range.vue
│   │   ├── refreshControl.vue
│   │   ├── searchBar.vue
│   │   ├── select.vue
│   │   ├── snackBar.vue
│   │   ├── switch.vue
│   │   ├── tabbar.vue
│   │   └── toast.vue
│   └── router
│       └── index.js
└── static                                          // 静态资源目录
    └── image

```

## 参考、使用的项目
- [element](https://github.com/ElemeFE/element)
- [mint-ui](https://github.com/ElemeFE/mint-ui/)
- [vux](https://github.com/airyland/vux)
- [muse-ui](https://github.com/museui/muse-ui)
- [iview](https://github.com/iview/iview)
- [iscroll](https://github.com/cubiq/iscroll)
- [fastclick](https://github.com/ftlabs/fastclick)
