<template>
  <div id="Pie" style="height:80vh"></div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import * as echarts from 'echarts'
const option = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
})
const drawEcharts = (option)=>{
    // 在id为2的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('Pie'));
    // 指定图表的配置项和数据
    myChart.setOption(option);
}
onMounted(()=>{
    drawEcharts(option.value)
})
</script>

<style>

</style>