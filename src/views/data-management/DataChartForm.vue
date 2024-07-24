<template>
  <div id="form" style="height:80vh">
    
  </div>
</template>

<script setup>
 import { useRoute } from 'vue-router'
 import { ref } from 'vue'
 import { onMounted } from 'vue'
 import * as echarts from 'echarts'
// // 获取路由跳转时传入的option参数，形式为Params类型
// // console.log(this.$route.params)
// const route = useRoute()
// //画图表的配置项
const option = ref({
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
}) 

// //画图函数
const drawEcharts = (option)=>{
    // 在id为1的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('form'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

onMounted(()=>{
    drawEcharts(option.value)
})
</script>

<style>

</style>