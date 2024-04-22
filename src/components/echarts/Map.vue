<template>
  <div ref="map" style="width: 100%; height: 100%;" />
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Map',
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
    this.loadGeoJsonData().then(res => {
      this.initChart()
    })
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
    async loadGeoJsonData() {
      try {
        const response = await fetch('/data/guizhou.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        echarts.registerMap('guizhou', await response.json())
      } catch (error) {
        console.error('加载JSON文件时出错:', error)
      }
    },
    initChart() {
      this.chart = echarts.init(this.$refs.map)
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
