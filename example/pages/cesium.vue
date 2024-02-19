<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Cesium Viewer</span>
    </header-bar>
    <scroll-view>
      <div class="cesium-viewer-demo" ref="viewerContainer">
        <vc-viewer
          ref="vcViewer"
          :animation="animation"
          :base-layer-picker="baseLayerPicker"
          :timeline="timeline"
          :fullscreen-button="fullscreenButton"
          :fullscreen-element="fullscreenElement"
          :info-box="infoBox"
          @ready="ready"
        >
          <vc-navigation></vc-navigation>
          <vc-map-overview></vc-map-overview>
          <vc-layer-imagery>
            <vc-provider-imagery-tianditu map-style="img_c" :token="tk"></vc-provider-imagery-tianditu>
          </vc-layer-imagery>
          <vc-layer-imagery ref="layerText">
            <vc-provider-imagery-tianditu map-style="cia_c" :token="tk"></vc-provider-imagery-tianditu>
          </vc-layer-imagery>
        </vc-viewer>
        <div class="demo-tool">
          <span>动画部件</span>
          <ui-switch v-model="animation"></ui-switch>
          <!-- <md-switch v-model="animation"></md-switch> -->
          <span>时间轴部件</span>
          <ui-switch v-model="timeline"></ui-switch>
          <!-- <md-switch v-model="timeline"></md-switch> -->
          <span>基础图层拾取器</span>
          <ui-switch v-model="baseLayerPicker"></ui-switch>
          <!-- <md-switch v-model="baseLayerPicker"></md-switch> -->
          <span>全屏按钮</span>
          <ui-switch v-model="fullscreenButton"></ui-switch>
          <!-- <md-switch v-model="fullscreenButton"></md-switch> -->
          <span>信息提示框</span>
          <ui-switch v-model="infoBox"></ui-switch>
          <!-- <md-switch v-model="infoBox"></md-switch> -->
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
  import Vue from 'vue';
  import VueCesium, { VcOverviewMap } from 'vue-cesium';
  import 'vue-cesium/lib/style.css';
  import 'vue-cesium/lib/vc-navigation.css';
  import 'vue-cesium/lib/vc-navigation-sm.css';
  import 'vue-cesium/lib/vc-map-overview.css';
  Vue.use(VueCesium, {
    cesiumPath: 'https://unpkg.com/cesium@1.100/Build/Cesium/Cesium.js',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZWYwY2EwOC04NTI1LTQ3NTYtYjIzOC0yMzgwYmY2OTAyZjEiLCJpZCI6MTk2MzMzLCJpYXQiOjE3MDgzMTEyNTl9._ddhRCmLuGq7lEEj19pALeL_n9Yzw8pjOKUXJqDFgNE'
  });
  Vue.use(VcOverviewMap);
  // import { Viewer, ImageryLayer, VcNavigation } from 'vue-cesium'
  // VueCesium 默认使用 `https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js`
  // Vue.use(Viewer)
  // Vue.use(ImageryLayer)
  // Vue.use(VcNavigation)
  export default {
    data() {
      return {
        animation: true,
        timeline: true,
        baseLayerPicker: false,
        fullscreenButton: true,
        infoBox: true,
        fullscreenElement: document.body,
        tk: '436ce7e50d27eede2f2929307e6b33c0'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(() => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.scene.globe.enableLighting = true
        this.fullscreenElement = this.$refs.viewerContainer
        viewer.entities.add({
          id: '武汉欢迎你',
          position: Cesium.Cartesian3.fromDegrees(114.29, 30.59, 100),
          // billboard: new Cesium.BillboardGraphics({
          //   image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          //   scale: 0.1
          // }),
          // label: new Cesium.LabelGraphics({
          //   text: 'Hello Cesium',
          //   font: '24px sans-serif',
          //   horizontalOrigin: 1,
          //   outlineColor: new Cesium.Color(0, 0, 0, 1),
          //   outlineWidth: 2,
          //   pixelOffset: new Cesium.Cartesian2(17, -5),
          //   style: Cesium.LabelStyle.FILL
          // })
        })
      },

      back () {
        window.history.back()
      },
    }
  }
</script>
<style>
  .cesium-viewer-demo {
    position: relative;
    width: 100%;
    height: 80%;
  }

  .demo-tool {
    position: absolute;
    left: 1%;
    top: 1%;
    min-width: 185px;
    z-index: 100;
    color: #fff;
    background-color: rgba(0,0,0,.2);
  }
</style>
