<template>
  <el-card>
    <div class="card-container">
      <el-card class="card-item" shadow="always">excel</el-card>
      <el-card class="card-item" shadow="hover">csv</el-card>
      <el-card class="card-item" shadow="never">json</el-card>
      <el-card class="card-item" shadow="hover">xml</el-card>
      <el-card class="card-item" shadow="always">sql</el-card>
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
</style>

<script>
</script>
