<template>
  <ECharts :options="chartOptions" auto-resize />
</template>

<script>
import ECharts from '@/components/echarts/ECharts.vue'

export default {
  name: 'LeftBott',
  components: {
    ECharts
  },
  data() {
    return {
      chartOptions: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
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
            name: '电信',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210, 110, 125]
          },
          {
            name: '联通',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310, 110, 125]
          },
          {
            name: '移动',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410, 110, 125]
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
