<template>
  <Map :options="chartOptions" auto-resize />
</template>

<script>
import Map from '@/components/echarts/Map.vue'
export default {
  name: 'Center',
  components: {
    Map
  },
  data() {
    return {
      chartOptions: {
        tooltip: {
          trigger: 'item',
          formatter: function(res) {
            debugger
            return '{b}<br/>{c} (p / km2)'
          }
        },
        visualMap: {
          min: 800,
          max: 50000,
          text: ['高', '低'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            name: '贵州',
            type: 'map',
            map: 'guizhou',
            label: {
              show: true
            },
            data: [
              { name: '贵阳', value: 51 },
              { name: '遵义', value: 43 },
              { name: '毕节', value: 38 },
              { name: '黔南', value: 35 },
              { name: '黔东南', value: 33 },
              { name: '铜仁', value: 31 },
              { name: '黔西南', value: 28 },
              { name: '六盘水', value: 22 },
              { name: '安顺', value: 17 }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
/* 根据需要添加样式 */
</style>
