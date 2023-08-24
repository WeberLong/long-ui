const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  publicPath: process.env.NODE_ENV === 'production' ? '/long-ui/' : '/',

  pages: {
    index: {
      entry: 'example/main.js',
      template: 'example/index.html',
      filename: 'index.html'
    }
  },

  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('utils', path.resolve(__dirname, './src/utils'))
  },
})
