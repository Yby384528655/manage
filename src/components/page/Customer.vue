<template>
    <div class="customer">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i> 客服互动</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>图片上传</el-breadcrumb-item> -->
        </el-breadcrumb>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <el-menu-item index="customer">收件箱</el-menu-item>
            <el-menu-item index="customer?type=favorite">收藏夹</el-menu-item>
            <el-menu-item index="socialcues">社交线索</el-menu-item>
        </el-menu>
        <div class='customerlist'>
            <div class='cuslist'>
                <div v-for="data in datas" class='cuslistcont'>
                    <div>
                        <router-link  class='listcontleft' to="/plutuser">
                            <img v-bind:src='data.icon1'>
                            <span><img v-bind:src='data.icon1'></span>
                        </router-link>
                    </div>
                </div>
                <div class="pagination">
                    <el-pagination layout="prev, pager, next" @size-change='handleSizeChange' :total="datalength" @current-change="handleCurrentChange">
                    </el-pagination>
                </div>

            </div>
            <div class='userMassage'>
                <div class='usermascont'>
                    <div class='userdate'>
                        <p>共有<span>{{datalength}}</span>条消息</p>
                          <div class="block">
                            <!-- <span class="demonstration">带快捷选项</span> -->
                            <el-date-picker v-model="value7" type="daterange" align="right" @change='choosedate' placeholder="选择日期范围" :picker-options="pickerOptions2">
                            </el-date-picker>
                          </div>
                        <el-checkbox v-model="hlcl">忽略已处理的消息</el-checkbox>
                    </div>
                    <div class='usernumber'>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                          <div style="margin: 15px 0;"></div>
                          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city">
                                <img :src='city.icon'>
                                <span>{{city.name}}</span></el-checkbox>
                          </el-checkbox-group>
                        <router-link to='/plutuser'>新增社交账号</router-link>
                    </div>
                    <div class='usertypes'>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                          <div style="margin: 15px 0;"></div>
                          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city">
                                <img :src='city.icon'>
                                <span>{{city.name}}</span></el-checkbox>
                          </el-checkbox-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.customer .el-menu{margin-top: 10px;}
.customer .el-menu li{display:inline;}
.customerlist{display:flex;}
.cuslist{width:70%;}
.cuslistcont{clear:both;margin-top: 20px;}
.listcontleft{width:80px;height:80px;float:left;position:relative;}
.listcontleft>img{width:80px;height:80px;}
.listcontleft span>img{width:40px;height:20px;position:absolute;bottom:0;right:-10px;}
.listcontright{border:1px solid #000;margin-left:100px;padding:20px;}
.listcontright p{margin-bottom: 10px;}
.listusercont{
    padding-top: 20px;
    min-height: 120px;
    background:#eee;
}
.listusercont img{
    margin:0 20px;
    width:150px;
    height:100px;
    float:left;
}
.listusercont p{
    display:inline-block;
}
.handle{
    text-align: right;
    margin-top: 10px;
}
.handle span{
    width:20px;
    height:20px;
    margin-left: 10px;
    display:inline-block;
}
.handle span i{
    font-size:20px;
    color:#00d1b2;
}
.userMassage{width:28%;margin-left: 2%;margin-top: 20px;}
.usermascont{border:1px solid #000;}
.userdate{padding:10px;}
.userdate label{display:block;margin-top: 10px;}
.usermascont .el-checkbox__input{float:right;}
.usernumber, .usertypes{border-top:1px solid #000;padding:10px;}
.usernumber img, .usertypes img{width:30px;height:20px;}
.usernumber p span, .usertypes p span{
    float:right;text-decoration: underline;color:#00d1b2;
}
.usernumber p, .usertypes p{
    font-size:14px;
}
.usernumber a{margin:5px auto;display:block;text-align:center;width:80%;background:#00d1b2;border-radius: 10px;height:2em;line-height: 2em;color:#fff;}
.usernumber ul li, .usertypes ul li{list-style: none;margin:5px auto;}
.el-checkbox-group{height:auto;}
.el-checkbox-group label{width:100%;}
.el-checkbox+.el-checkbox{margin-left:0;}
.usertypes>label{width:100%;}
.usertypes>label .checkbox__input{float:right;}
</style>
<script>
export default{
    data: function(){
        return {

            activeName: 'first',
            datas:[],
            datalength:0,
            hlcl:true,
            dataall:[
                {
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:true,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                },{
                    name:'VK主页',
                    content:'good',
                    type:'fackbook',
                    time:'23小时之前',
                    istrue:false,
                    icon1:'../../../static/img/img.jpg'
                }],
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value7: ['Wed Mar 22 2017 20:16:57 GMT+0800', 'Fri Apr 21 2017 20:16:57 GMT+0800 '],
            usernums:[{type:'fackbook',name:'dosudd',icon:'../../../static/img/img.jpg',istrue:true},{type:'fackbook',name:'dosuddsefse',icon:'../../../static/img/img.jpg',istrue:false}],
            usertypes:[{type:'fackbook',name:'dosudd',icon:'../../../static/img/img.jpg',istrue:true},
                {type:'fackbook',name:'dos1dd',icon:'../../../static/img/img.jpg',istrue:true},
                {type:'fackbook',name:'dos2dd',icon:'../../../static/img/img.jpg',istrue:false},
                {type:'fackbook',name:'dos3dd',icon:'../../../static/img/img.jpg',istrue:true},
                {type:'fackbook',name:'dos4udd',icon:'../../../static/img/img.jpg',istrue:false},
                {type:'fackbook',name:'dos5udd',icon:'../../../static/img/img.jpg',istrue:false},
                {type:'fackbook',name:'dos6udd',icon:'../../../static/img/img.jpg',istrue:true},
                {type:'fackbook',name:'do7sudd',icon:'../../../static/img/img.jpg',istrue:false},
                {type:'fackbook',name:'dos8udd',icon:'../../../static/img/img.jpg',istrue:true}],
            isfavor:false,
            date1:'',
            data2:'',
            usernumlist:[],
            usermsgtypelist:[],
            page:1,
            checkAll: true,
            checkedCities1: [],
            checkedCities: [],
            cities: [],
            isIndeterminate: true
        };
    },
    methods: {
    },
    mounted:function(){
    }
};
</script>