<!--
<template>
  <div id="container" />
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  name: 'MapView',
  mounted() {
    this.initAMap()
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: 'f3c08da173569e33a72aeb69e73d95da', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale', 'AMap.Circle'] // 需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
      })
        .then((AMap) => {
          this.map = new AMap.Map('container', {
            rotateEnable: true,
            pitchEnable: true,
            zoom: 11,
            pitch: 50,
            rotation: -15,
            viewMode: '3D', // 开启3D视图,默认为关闭
            zooms: [2, 20],
            center: [116.433322, 39.900255]
          })
          this.map.add(new AMap.Circle({
            center: [116.433322, 39.900255],
            radius: 1000, // 半径米
            borderWeight: 3,
            willReadFrequently: true,
            strokeColor: '#FF33FF',
            strokeWeight: 6,
            fillOpacity: 0.2,
            strokeStyle: 'dashed',
            strokeDasharray: [4, 2, 4],
            // 线样式还支持 'dashed'
            fillColor: '#1791fc',
            zIndex: 50
          }))
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
-->
