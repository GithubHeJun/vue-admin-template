<template>
  <ECharts :options="chartOptions" auto-resize />
</template>

<script>
import ECharts from '@/components/echarts/ECharts.vue'

export default {
  name: 'LeftTop',
  components: {
    ECharts
  },
  data() {
    return {
      chartOptions: {
        xAxis: {
          type: 'category',
          data: ['贵阳', '毕节', '铜仁', '安顺', '黔东南', '黔西南', '黔南', '遵义', '六盘水']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 110, 125],
            type: 'bar'
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
