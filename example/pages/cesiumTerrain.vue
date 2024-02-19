<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Cesium Terrain</span>
    </header-bar>
    <scroll-view>
      <div class="cesium-terrain-demo">
        <vc-viewer @ready="ready">
          <vc-layer-imagery>
            <vc-provider-imagery-bingmaps
              url="https://dev.virtualearth.net"
              bm-key="AmGu3cvB_g1HbkQErEyvmLc9j0YIGWS7IdOqR7-hQbO8J92Fzrzkhy_bYKSsyoEx"
              map-style="Aerial"
            ></vc-provider-imagery-bingmaps>
          </vc-layer-imagery>
          <vc-provider-terrain-cesium ref="terrain" :request-water-mask="requestWaterMask"></vc-provider-terrain-cesium>
        </vc-viewer>
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
      return {}
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        let target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
        let offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
        viewer.camera.lookAt(target, offset)
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      },

      back () {
        window.history.back()
      },
    }
  }
</script>
<style>
  .cesium-terrain-demo {
    position: relative;
    width: 100%;
    height: 80%;
  }
</style>
