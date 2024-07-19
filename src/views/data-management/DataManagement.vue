<script setup>
import { ref,onMounted } from 'vue'
import { ElTable } from 'element-plus'
import DataBaseVue from "@/views/data-management/DataBase.vue"; //数据库管理
import DataChartsVue from "@/views/data-management/DataCharts.vue"; //数据图表
import DataDisplayVue from "@/views/data-management/DataDisplay.vue"; //数据展示
// 导入echarts
import * as echarts from 'echarts'
const currentRow = ref(null)

const handleCurrentChange = (val) => {
    currentRow.value = val
    console.log(currentRow.value);
}
const tableData = ref([
    { name: '数据集1' },
    { name: '数据集2' },
    { name: '数据集3' },
    { name: '数据集4' },
    { name: '数据集5' },
    { name: '数据集6' },
    { name: '数据集7' },
    { name: '数据集8' },
    { name: '数据集9' },
    { name: '数据集10' },
])
const option1 = ref({
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
const option2 = ref({
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
const option3 = ref({
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: 'scatter'
    }
  ]
})
const option4 = ref({
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
const drawEcharts1 = (option)=>{
    // 在id为1的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('1'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
const drawEcharts2 = (option)=>{
    // 在id为2的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('2'));
    // 指定图表的配置项和数据
    myChart.setOption(option);
}
const drawEcharts3 = (option)=>{
    // 在id为3的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('3'));
    // 指定图表的配置项和数据
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
const drawEcharts4 = (option)=>{
    // 在id为4的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('4'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
onMounted(() => {
    // 在id为1的div中创建一个echarts实例
    drawEcharts1(option1.value);
    // 在id为2的div中创建一个echarts实例
    drawEcharts2(option2.value);
    // 在id为3的div中创建一个echarts实例
    drawEcharts3(option3.value);
    // 在id为4的div中创建一个echarts实例
    drawEcharts4(option4.value);
})
</script>

<template>
    <el-row :gutter="1">
        <el-col :span="4">
            <!-- <DataBaseVue /> -->
            <el-card shadow="hover">
                <!-- <DataBaseVue /> -->
                <template #header>
                    <div class="card-header">
                        <span>数据集</span>
                    </div>
                </template>
                <!-- <DataBaseVue :tableData = "tableData"/> -->
                <el-table :data="tableData" style="width: 100%" highlight-current-row
                    @current-change="handleCurrentChange" height="35vh" :show-header="false">
                    <el-table-column prop="name" label="DataSet" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="5">
            <el-card shadow="hover">
                <template #header>
                    <div class="card-header">
                        <span>图表</span>
                    </div>
                </template>
            </el-card>
        </el-col>
        <el-col :span="15">
            <el-card shadow="hover">
                <template #header>
                    <div class="card-header">
                        <span>数据展示</span>
                        
                    </div>
                </template>
                <el-row :gutter="1">
                  <el-col :span="24">
                    <el-row :gutter="1">
                      <el-col :span="12">
                        <div id="1" style="height:350px"> 
                            
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div id="2" style="height:350px"></div>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="24">
                    <el-row :gutter="1">
                      <el-col :span="12">
                        <div id="3" style="height:350px"></div>
                      </el-col>
                      <el-col :span="12">
                        <div id="4" style="height:350px"></div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
.el-row {
    height: 100%;

    .el-card {
        height: 100%;
        padding: 0;

        :deep(.el-card__header) {
            padding: 10px 0;
        }

        :deep(.el-card__body) {
            padding: 0;
        }

        .card-header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            font-size: 16px;
        }

        .el-table {
            --el-table-row-hover-bg-color: #e4e6e9;
            --el-table-current-row-bg-color: #c3e9ff;
            :deep(.el-table__row:hover) {
                cursor: pointer;


            }

            :deep(.current-row:hover) {
                cursor: default;

            }
        }



    }
}
</style>