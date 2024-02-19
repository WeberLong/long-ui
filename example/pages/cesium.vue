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
          :camera="camera"
          :animation="animation"
          :timeline="timeline"
          @ready="ready"
        >
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
          <span>时间轴部件</span>
          <ui-switch v-model="timeline"></ui-switch>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
  import Vue from 'vue';
  import VueCesium, { VcOverviewMap } from 'vue-cesium';
  import 'vue-cesium/lib/style.css';
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
        fullscreenElement: document.body,
        tk: '436ce7e50d27eede2f2929307e6b33c0',
        camera: {
          position: {
            x: -1336250.5076601694,
            y: 5333101.760774733,
            z: 3229877.420756886
          },
          heading: 6.259802922203329,
          pitch: -1.5382656190477708,
          roll: 0
        }
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(() => {
        console.log('cesium viewer is loaded.')
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.scene.globe.enableLighting = true
        this.fullscreenElement = this.$refs.viewerContainer
        viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(114.29, 30.59, 50),
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
