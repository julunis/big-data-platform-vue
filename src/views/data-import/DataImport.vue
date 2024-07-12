<script  setup>
import { ref } from "vue";
//导入路由
import { useRouter } from "vue-router";
const router = useRouter();

//跳转到响应数据导入界面
const whichImport = (cardContent) => {
  // 点解el-card内容为excel,进入excel相关路径
  switch (cardContent) {
    case "excel":
      router.push("/data/import/excel");
      break;
    case "csv":
      router.push("/data/import/csv");
      break;
    case "json":
      router.push("/data/import/json");
      break;
    case "xml":
      router.push("/data/import/xml");
      break;
    case "sql":
      router.push("/data/import/sql");
      break;
    default:
      console.error("未知的导入类型");
  }
};
</script>
<template>
  <el-card>
    <div class="card-container">
      <el-card class="card-item" shadow="always" @click="whichImport('excel')"
        >excel</el-card
      >
      <el-card class="card-item" shadow="always" @click="whichImport('csv')"
        >csv</el-card
      >
      <el-card class="card-item" shadow="always" @click="whichImport('json')"
        >json</el-card
      >
      <el-card class="card-item" shadow="always" @click="whichImport('xml')"
        >xml</el-card
      >
      <el-card class="card-item" shadow="always" @click="whichImport('sql')"
        >sql</el-card
      >
    </div>
  </el-card>
</template>
  
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 100px; /* 间隔 */
}

.card-item {
  width: 100px; /* 小方块 */
  height: 100px; /* 小方块 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.card-item:hover {
  transform: scale(1.1); /* 放大 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* 阴影加深 */
  color: #ff47f3; /* 内容变色 */
}
</style>


