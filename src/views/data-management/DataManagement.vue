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
const drawEcharts1 = ()=>{
    // 在id为1的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('1'));
    // 指定图表的配置项和数据
    let option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
const drawEcharts2 = ()=>{
    // 在id为2的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('2'));
    // 指定图表的配置项和数据
    let option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
const drawEcharts3 = ()=>{
    // 在id为3的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('3'));
    // 指定图表的配置项和数据
    let option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
const drawEcharts4 = ()=>{
    // 在id为4的div中创建一个echarts实例
    let myChart = echarts.init(document.getElementById('4'));
    // 指定图表的配置项和数据
    let option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
onMounted(() => {
    // 在id为1的div中创建一个echarts实例
    drawEcharts1();
    // 在id为2的div中创建一个echarts实例
    drawEcharts2();
    // 在id为3的div中创建一个echarts实例
    drawEcharts3();
    // 在id为4的div中创建一个echarts实例
    drawEcharts4();
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