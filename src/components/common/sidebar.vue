<template>
<div class="sidebar">
<el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
<el-menu-item index="readme">开始</el-menu-item>
<el-menu-item index="baseform">实例1</el-menu-item>
<el-menu-item index="vueeditor">实例2</el-menu-item>
<el-menu-item index="activitymarketing">实例3</el-menu-item>
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
    };
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
