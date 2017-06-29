<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        },
        mounted(){
            var url='https://snscn.joinf.com'+this.getApiList(this,'getaccount');
            // var data={name:'123'};
            var response=this.Apilist.ajax(url);
            response.then(()=>{
            }).catch(()=>{
            });
        }
    };
</script>
