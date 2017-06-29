<template>
    <div>
        <assembly v-bind:usermess='sendemail'></assembly>


        <el-button @click='sendemail={issend:true,isemail:[{name:"123@163.cojm"}]}'>文字按sef钮</el-button>
        <el-button  @click='sendemail={issend:true,isemail:[{name:"456@163.cojm"}]}'>主要按钮</el-button>
        <el-button @click='sendemail={issend:true,isemail:[{name:"789@163.cojm"}]}'>文字按钮</el-button>
        <el-button @click='second(3)'>文字按钮</el-button>


    </div>
</template>
<script>
    import axios from 'axios';
    import assembly from './assembly.vue';            //引入发送邮件的模板
    export default{
        components: {                                //添加模板到页面中
            assembly
        },
        data:function(){
            return {
                sendemail:{issend:false,isemail:[{name:'123@163.cojm'}]},            //调用模板状态与要发送的邮箱地址
                information: {
                    pagination:{},
                    data:[]
                }
            };
        },
        methods:{
            second(){
                axios.get('/static/data.json')
                    .then( (res) => {
                        this.information = res.data;
                    });
            }
        }
    };
</script>