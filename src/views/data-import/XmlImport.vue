<template>
  <el-card>
    <div class="card-hard">欢迎导入您的excel数据</div>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="数据名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="数据类型">
        <el-select v-model="form.region" placeholder="请选择数据类型">
          <el-option label="销售数据" value="sales" />
          <el-option label="地理数据" value="geographic" />
          <el-option label="异常监测数据" value="anomaly_detection" />
          <el-option label="客户数据" value="customer" />
          <el-option label="财务数据" value="financial" />
          <el-option label="库存数据" value="inventory" />
          <el-option label="市场数据" value="market" />
          <el-option label="生产数据" value="production" />
          <el-option label="物流数据" value="logistics" />
          <el-option label="人力资源数据" value="hr" />
          <el-option label="社交媒体数据" value="social_media" />
          <el-option label="气象数据" value="weather" />
          <el-option label="交通数据" value="traffic" />
          <el-option label="健康数据" value="health" />
          <el-option label="教育数据" value="education" />
          <el-option label="能源数据" value="energy" />
          <el-option label="环境数据" value="environment" />
          <el-option label="体育数据" value="sports" />
          <el-option label="法律数据" value="legal" />
          <el-option label="娱乐数据" value="entertainment" />
          <el-option label="其他数据" value="other" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.region === 'other'" label="其他数据类型">
        <el-input v-model="form.otherType" placeholder="请输入其他数据类型" />
      </el-form-item>
      <el-form-item label="数据时间范围">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="数据清洗">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="选择文件">
        <div>
          <el-upload
            ref="upload"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">select file</el-button>
            </template>
            <el-button class="ml-3" type="success" @click="submitUpload">
              upload to server
            </el-button>
            <template #tip>
              <div class="el-upload__tip text-orange">
                仅支持xml文件，且只能上传一个文件
              </div>
            </template>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="数据描述">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">导入</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { ref } from "vue";
import { genFileId } from "element-plus";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";
import { ElMessage } from "element-plus";
// 导入路由
import { useRouter } from "vue-router";
const router = useRouter();

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
  otherType: "",
});

const onSubmit = () => {
  // 显示导入成功提示,使用element-plus的message组件
  ElMessage.success("数据导入成功");
  // 路由跳转到数据导入成功界面
  router.push("/data/import/success");
};

const upload = ref<UploadInstance>();

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};

const submitUpload = () => {
  upload.value!.submit();
};
</script>

<style scoped>
.card-hard {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.ml-3 {
  margin-left: 20px;
}
.text-orange {
  color: orange;
}
</style>