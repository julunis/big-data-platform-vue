<script setup>
import { ref,onMounted } from 'vue'
import { ElTable } from 'element-plus'
//导入路由
import { useRouter } from 'vue-router'
const router = useRouter()
// 导入echarts
import * as echarts from 'echarts'

const gotoImport = () => {
    // 跳转到数据导入页面,并传递参数option1
    router.push('/data/import')
}

//数据集
const tableData = [
    {
        name: '电池数据',
        propList: [
            {
                propName: '电压',
            },
            {
                propName: '电流',
            },
            {
                propName: '时间',
            },
            {
                propName: '1',
            },
            {
                propName: '2',
            },
            {
                propName: '3',
            },
            {
                propName: '4',
            },
            {
                propName: '5',
            },
            {
                propName: '6',
            },
            {
                propName: '7',
            },
            {
                propName: '8',
            },
            {
                propName: '9',
            },
            {
                propName: '10',
            },
            {
                propName: '11',
            }
        ]
    },
    {
        name: '交通流数据',
        propList: [
            {
                propName: '地址',
            },
            {
                propName: '车流量',
            },
            {
                propName: '时间',
            }
        ]
    },
    {
        name: '天气数据',
        propList: [
            {
                propName: '地址',
            },
            {
                propName: '天气',
            },
            {
                propName: '时间',
            }
        ]
    },
    {
        name: '天气数据',
        propList: [
            {
                propName: '地址',
            },
            {
                propName: '天气',
            },
            {
                propName: '时间',
            }
        ]
    },
    {
        name: '天气数据',
        propList: [
            {
                propName: '地址',
            },
            {
                propName: '天气',
            },
            {
                propName: '时间',
            }
        ]
    },
    {
        name: '天气数据',
        propList: [
            {
                propName: '地址',
            },
            {
                propName: '天气',
            },
            {
                propName: '时间',
            }
        ]
    },
    {
        name: '天气数据',
        propList: [
            {
                propName: '地址',
            },
            {
                propName: '天气',
            },
            {
                propName: '时间',
            }
        ]
    },
    {
        name: '天气数据',
        propList: [
            {
                propName: '地址',
            },
            {
                propName: '天气',
            },
            {
                propName: '时间',
            }
        ]
    }
]
//选择的数据集对应的属性列表
const selectedPropList = ref(tableData[0].propList)
//图表类型
const chartType = ref('form')
// 选定的数据集
const currentRow = ref(tableData[0])
const handleCurrentChange = (val) => {
    currentRow.value = val
    console.log(currentRow.value.propList)
    selectedPropList.value = []       
}
onMounted(() => {
     goto_chart('form')
    //  console.log(chartType)
    //  console.log(selectedPropList.value)
    //  console.log(currentRow.value)
})
// 点击不同的图表，跳转到不同的图表页面
const goto_chart = (chartType1) => {

    // router.push('/data/management/'+chartType,{option:option1.value})
    router.push({ 
        path: '/data/management/' + chartType1, 
        query: { 
            selectedPropList:JSON.stringify(selectedPropList.value),
            chartType:JSON.stringify(chartType.value),
            currentRow:JSON.stringify(currentRow.value) 
        }
    })
    // console.log(this.chartType)
}
</script>

<template>
    <el-row :gutter="1">
            <el-col :span="4">
            <!-- <DataBaseVue /> -->
            <el-card class="card" shadow="hover">
                <div class="card-header">
                    <span>数据集</span>
                </div>
                <el-table :data="tableData" style="width: 100%" highlight-current-row
                    @current-change="handleCurrentChange" height="30vh" :show-header="false">
                    <el-table-column prop="name" label="DataSet" />
                </el-table>
                <el-button class="import-button" plain @click="gotoImport"><el-icon>
                        <CirclePlus />
                    </el-icon>&nbsp;导入数据集</el-button>
                <div class="card-header">
                    <span>属性列表</span>
                </div>
                <el-scrollbar height="45vh">
                    <div v-if="currentRow != null">
                        <el-checkbox-group v-model="selectedPropList" @change="console.log(selectedPropList)">
                            <el-checkbox class="prop-checkbox" v-for="prop in currentRow.propList"
                                :value="prop.propName" border>{{ prop.propName }}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-scrollbar>
            </el-card>
        </el-col>
        <el-col :span="5">
            <el-card class="card" shadow="hover">
                <div class="card-header">
                    <span>图表</span>
                </div>
                <el-scrollbar height="30vh">
                    <div class="chart-button-area">
                        <el-radio-group v-model="chartType">
                            <el-radio class="chart-button" value="Form" border @click="goto_chart('form')"><img class="chart-button-icon"
                                    src="/chart/Form.svg" alt="Form"></el-radio>
                            <el-radio class="chart-button" value="Histogram" border @click="goto_chart('histogram')"><img class="chart-button-icon"
                                    src="/chart/Histogram.svg" alt="Histogram"></el-radio>
                            <el-radio class="chart-button" value="Line" border @click="goto_chart('line')"><img class="chart-button-icon"
                                    src="/chart/Line.svg" alt="Line"></el-radio>
                            <el-radio class="chart-button" value="Pie" border @click="goto_chart('pie')"><img class="chart-button-icon"
                                    src="/chart/Pie.svg" alt="Pie"></el-radio>
                            <el-radio class="chart-button" value="Circular" border @click="goto_chart('circular')"><img class="chart-button-icon"
                                    src="/chart/Circular.svg" alt="Circular"></el-radio>
                        </el-radio-group>
                    </div>
                </el-scrollbar>
                <div class="card-header">
                    <span>参数</span>
                </div>
                <el-scrollbar height="45vh">
                </el-scrollbar>
                <el-button class="generating">生成图表</el-button>
            </el-card>
        </el-col>
        <el-col :span="15">
            <el-card shadow="hover">
                <template #header>
                    <div class="card-header">
                        <span>数据展示</span>
                        
                    </div>
                </template>
                <div style="height:80vh">
                    <router-view></router-view>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
.el-row {
    height: 100%;

    .card {
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
            padding: 10px 0;
            font-size: 16px;
            background-color: #c2c6ce7d;
        }

        .import-button {
            height: 40px;
            width: 100%;
            display: flex;
            padding: 10px 0;
            font-size: 16px;
            color: #20a7f6;
            border-radius: 0;
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

        .prop-checkbox {
            height: 40px;
            width: 100%;
            border-radius: 0;
        }

        .chart-button-area {

            :deep(.el-radio__input) {
                display: none !important;
            }

            :deep(.is-checked) {
                background-color: #3dadf736;
            }

            .chart-button {
                margin: 5px;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;

                .chart-button-icon {
                    display: flex;
                    width: 30px;
                    height: 30px;
                }
            }
            .chart-button:hover {
                background-color: #3dadf736;
                transform: scale(1.1);
            }

        }

        .generating {
            color: black;
            width: 80%;
            margin: 0 10%;
            background-color: #20a8f658;
        }

    }
}
</style>