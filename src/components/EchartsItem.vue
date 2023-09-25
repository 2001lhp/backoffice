<script setup lang="ts">
import type { EChartsType } from 'echarts'
import * as echarts from 'echarts'
import { onMounted, ref, nextTick, watch } from 'vue'
type EChartsOption = echarts.EChartsOption
const option = defineProps<{
  chartOption: EChartsOption
}>()
const chartRef = ref()
let chart: EChartsType
onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption(option.chartOption)
  window.addEventListener('resize', () => {
    nextTick(() => {
      chart && chart.resize()
    })
  })
})
watch(
  option.chartOption,
  () => {
    chart && chart.setOption(option.chartOption)
  },
  { deep: true }
)
</script>
<template>
  <div class="chart" ref="chartRef"></div>
</template>
<style lang="scss" scoped>
.chart {
  flex: 1;
  height: 300px;
}
</style>
