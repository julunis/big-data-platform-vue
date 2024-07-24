<script setup>
import {
    Management,
    Promotion,
    UserFilled,
    User,
    Crop,
    EditPen,
    SwitchButton,
    CaretBottom
} from '@element-plus/icons-vue'
import avatar from '@/assets/default.png'
import { onMounted } from 'vue'
//导入pinia
import { useUserInfoStore } from '@/stores/user.js'
const userInfoStore = useUserInfoStore();
//导入接口函数
import { userInfoGetService } from '@/api/user.js'

//获取个人信息
const getUserInf = async () => {
    let result = await userInfoGetService();
    //存储pinia
    userInfoStore.info = result.data;
}
getUserInf()

//dropDown条目被点击后，回调的函数
import { useRouter } from 'vue-router'
const router = useRouter()
import { ElMessage, ElMessageBox } from 'element-plus'
import { useTokenStore } from '@/stores/token.js'
const tokenStore = useTokenStore()
const handleCommand = (command) => {
    if (command === 'logout') {
        //退出登录
        ElMessageBox.confirm(
            '你确认退出登录么？',
            '温馨提示',
            {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
            }
        )
            .then(async () => {
                //用户点击了确认
                //清空pinia中的token和个人信息
                userInfoStore.info = {}
                tokenStore.token = ''
                //跳转到登录页
                router.push('/login')
            })
            .catch(() => {
                //用户点击了取消
                ElMessage({
                    type: 'info',
                    message: '取消退出',
                })
            })
    } else {
        //路由
        router.push('/user/' + command)
    }
}
</script>

<template>
    <el-container class="layout-container">
        <el-header>
            <el-col class="header-menu" :span="18" :offset="3">
                <el-menu mode="horizontal" :ellipsis="false" router :default-active="router.currentRoute.value.path">
                    <el-menu-item index="/data/import"><strong>数据导入</strong></el-menu-item>
                    <el-menu-item index="/data/management"><strong>数据管理</strong></el-menu-item>
                    <el-menu-item index="/data/process"><strong>数据处理</strong></el-menu-item>
                </el-menu>
            </el-col>
            <el-col class="header-user" :span="3">
                <el-dropdown placement="bottom-end" @command="handleCommand">
                    <span class="el-dropdown__box">
                        <el-avatar :src="userInfoStore.info.userPic ? userInfoStore.info.userPic : avatar" />
                        <el-icon>
                            <CaretBottom />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="info" :icon="User">基本资料</el-dropdown-item>
                            <el-dropdown-item command="avatar" :icon="Crop">更换头像</el-dropdown-item>
                            <el-dropdown-item command="password" :icon="EditPen">重置密码</el-dropdown-item>
                            <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </el-header>
        <el-main>
            <router-view>
            </router-view>
        </el-main>
    </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;

    .el-header {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .header-menu{
            display: flex;
            justify-content: center;
        }

        .el-menu-item {
            font-size: 16px;
            width: 12vw;
        }

        .header-user{
            display: flex;
            justify-content: right;
        }

        .el-dropdown__box {
            display: flex;
            align-items: center;

            .el-icon {
                color: #999;
                margin-left: 10px;
            }

            &:active,
            &:focus {
                outline: none;
            }
        }
    }

    .el-main {
        padding: 10px 5px;
    }

}
</style>