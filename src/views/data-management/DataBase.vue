<template>
    <el-table
      :data="tableData"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
      height="35vh"
      :show-header="false"
    >
      <el-table-column prop="name" label="DataSet" />
    </el-table>
</template>

<script setup>
const currentRow = ref(null);
import { ElTable } from "element-plus";
const handleCurrentChange = (val) => {
  currentRow.value = val;
  console.log(currentRow.value);
};
// 接受父组件传入的表格数据
const props = defineProps({
  tableData: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 16px;
}
.el-card {
        height: 100%;
        padding: 0;

        :deep(.el-card__header) {
            padding: 10px 0;
        }

        :deep(.el-card__body) {
            padding: 0;
        }
}
</style>