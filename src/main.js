import "./assets/main.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import locale from "element-plus/dist/locale/zh-cn.js";  //中文
import router from "@/router"; //导入路由
import { createPinia } from "pinia";
//导入持久化插件
import {createPersistedState} from'pinia-persistedstate-plugin'

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState()
//pinia使用持久化插件
pinia.use(persist)

app.use(ElementPlus, { locale });
app.use(router);    //使用路由
app.use(pinia);    //使用pinia
app.mount("#app");
