# long-ui

#### 一个基于Vue2.x的移动端UI long-ui

Demo: <a href="https://weberlong.github.io/long-ui/"> https://weberlong.github.io/long-ui/ </a>

![](./example/assets/long-ui-demo-code.png)


## 技术栈
vue2 + vue-router + webpack + icomoon + less + jsx
- MVVM框架：[Vue 2.0](https://cn.vuejs.org/)
- 脚手架：[vue-cli](https://github.com/vuejs/vue-cli)
- 构建工具：webpack
- 前端路由：[vue-router](https://router.vuejs.org/)
- 图标icons: [icomoon](https://icomoon.io/#home)
- 代码风格检查：eslint
- 源码：es6
- 组件的设计与使用：[component](component.md)


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
├── babel.config.js
├── build.sh
├── component.md
├── example
│   ├── App.vue
│   ├── assets
│   ├── index.html
│   ├── main.js
│   ├── pages
│   └── router
├── jsconfig.json
├── lib
│   ├── fonts
│   └── img
├── package.json
├── src
│   ├── assets
│   │   ├── fonts
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
│   │   ├── swiper
│   │   └── toast
│   ├── index.js
│   └── utils
├── vue.config.js
└── yarn.lock
```

## 参考、使用的项目
- [element](https://github.com/ElemeFE/element)
- [mint-ui](https://github.com/ElemeFE/mint-ui/)
- [vux](https://github.com/airyland/vux)
- [muse-ui](https://github.com/museui/muse-ui)
- [iview](https://github.com/iview/iview)
- [iscroll](https://github.com/cubiq/iscroll)
- [fastclick](https://github.com/ftlabs/fastclick)
