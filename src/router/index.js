import { createRouter, createWebHistory } from "vue-router";
//导入组件
import LoginVue from "@/views/Login.vue";
import LayoutVue from "@/views/Layout.vue";

import ArticleCategoryVue from "@/views/article/ArticleCategory.vue";
import ArticleManageVue from "@/views/article/ArticleManage.vue";
import UserAvatarVue from "@/views/user/UserAvatar.vue"; //用户头像
import UserInfoVue from "@/views/user/UserInfo.vue"; //用户信息
import UserResetPasswordVue from "@/views/user/UserResetPassword.vue"; //用户重置密码
import DataImportVue from "@/views/data-import/DataImport.vue"; //数据导入
import ExcelImportVue from "@/views/data-import/ExcelImport.vue";   //excel文件数据导入
import JsonImportVue from "@/views/data-import/JsonImport.vue"; //json文件数据导入
import SqlImportVue from "@/views/data-import/SqlImport.vue"; //sql文件数据导入
import XmlImportVue from "@/views/data-import/XmlImport.vue"; //xml文件数据导入
import DataImportSuccessVue from "@/views/data-import/DataImportSuccess.vue"; //数据导入成功
import DataManagementVue from "@/views/data-management/DataManagement.vue"; //数据管理
//定义路由关系
const routes = [
    {
        path: "/login",
        component: LoginVue
    },
    {
        path: "/",
        component: LayoutVue,
        redirect: "/data/import",
        children: [
            { path: "/article/category", component: ArticleCategoryVue },
            { path: "/article/manage", component: ArticleManageVue },
            { path: "/user/avatar", component: UserAvatarVue },
            { path: "/user/info", component: UserInfoVue },
            { path: "/user/password", component: UserResetPasswordVue },
            { path: "/data/import", component: DataImportVue },
            { path: "/data/import/excel", component: ExcelImportVue },
            { path: "/data/import/json", component: JsonImportVue },
            { path: "/data/import/sql", component: SqlImportVue },
            { path: "/data/import/xml", component: XmlImportVue },
            { path: "/data/import/success", component: DataImportSuccessVue },
            { path: "/data/management", component: DataManagementVue },
        ],
    },
];

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//导出路由
export default router;
