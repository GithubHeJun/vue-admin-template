<template>
  <ECharts :options="chartOptions" auto-resize />
</template>

<script>
import ECharts from '@/components/echarts/ECharts.vue'

export default {
  name: 'MarRightTop',
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
          data: ['景区', '交通枢纽', '高流量商务区', '政务中心', '医院（三甲）', '高密度住宅区', '高校（校园）']
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
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联通',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '电信',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
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
