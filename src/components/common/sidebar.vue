<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
<!--             <el-menu-item index="readme">
                <i class="el-icon-setting"></i>工作台
            </el-menu-item>
            <el-menu-item index="baseform"><i class="el-icon-setting"></i>搜索</el-menu-item>
            <el-menu-item index="vueeditor"><i class="el-icon-setting"></i>社交媒体</el-menu-item>
            <el-menu-item index="activitymarketing"><i class="el-icon-setting"></i>活动营销</el-menu-item>
            <el-menu-item index="markdown"><i class="el-icon-setting"></i>EDM营销</el-menu-item> -->
            <el-menu-item index="plutuser"><i class="el-icon-setting"></i>速推站</el-menu-item>
<!--             <el-menu-item index="customer"><i class="el-icon-setting"></i>客服互动</el-menu-item>
            <el-menu-item index="assembly"><i class="el-icon-setting"></i>邮件</el-menu-item>
            <el-menu-item index="vuetable"><i class="el-icon-setting"></i>客户</el-menu-item>
            <el-menu-item index="basetable"><i class="el-icon-setting"></i>跟进</el-menu-item>
            <el-menu-item index="basecharts"><i class="el-icon-setting"></i>内容创意</el-menu-item>
            <el-menu-item index="track"><i class="el-icon-setting"></i>跟踪</el-menu-item> -->
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }

</style>
