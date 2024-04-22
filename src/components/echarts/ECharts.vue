<template>
  <div ref="chartContainer" style="width: 100%; height: 100%;" />
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'ECharts',
  props: {
    // 图表配置
    options: {
      type: Object,
      required: true
    },
    // 是否自动调整大小
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    // 监听配置的变化并更新图表
    options: {
      handler(newOptions) {
        this.chart.setOption(newOptions)
      },
      deep: true // 深度监听对象变化
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartContainer)
      this.chart.setOption(this.options)
    },
    handleResize() {
      this.chart.resize()
    }
  }
}
</script>

<style scoped>
/* 根据需要添加样式 */
</style>
