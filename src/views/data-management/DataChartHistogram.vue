<template>
    <div id="histogram" style="height:80vh"></div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import * as echarts from 'echarts'
const option = ref({
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
})
const drawEcharts = (option)=>{
    // 在id为4的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('histogram'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
onMounted(()=>{
    drawEcharts(option.value)
})
</script>

<style>

</style>