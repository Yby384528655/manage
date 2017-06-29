<template>
    <div id="app">
        <router-view  v-loading="isLoading"></router-view>
    </div>
</template>
<style>
@import "../static/css/main.css";
    /* @import "../static/css/color-dark.css";*/   /*深色主题   */
@import "../static/css/theme-green/color-green.css";   /*!*浅绿色主题*!*/
</style>
<script>
export default{
    name:'userIsLogin',
    computed:{
        isLoading(){
            console.log(this.$store.getters.getislogin);
            return this.$store.getters.getislogin;
        }
    }
};
</script>