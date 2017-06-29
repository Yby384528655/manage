<template>
    <div @click='track'>
        <div class='trackpage'>
            <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i> 跟踪</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>图片上传</el-breadcrumb-item> -->
            </el-breadcrumb>
            <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
                <el-menu-item index="sstrack">实时跟踪</el-menu-item>
                <el-menu-item index="khfztrack">客户分组</el-menu-item>
                <el-menu-item index="cdtrack">触点管理</el-menu-item>
            </el-menu>
            <div class='trackchoose'>
                <el-select v-model="trackvalue1" placeholder="请选择">
                <el-option
                  v-for="item in tracklist1"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
                <el-date-picker v-model="trackdate1" type="daterange" align="right" @change='choosedate' placeholder="选择日期范围" :picker-options="pickerOptions2">
                </el-date-picker>
            </div>
            <el-table :data="tracklist2" style="width: 100%">
                <el-table-column prop="index" label="序号"> </el-table-column>
                <el-table-column prop="name" label="用户表标识"><template scope="scope"><router-link to='/'>{{scope.row.name}}</router-link></template></el-table-column>
                <el-table-column  prop="behavior" label="最近触点行为"> </el-table-column>
                <el-table-column  prop="num" label="跟踪次数"> </el-table-column>
                <el-table-column  prop="address" label="最近跟踪地点"> </el-table-column>
                <el-table-column prop="date" label="最近触发时间"> </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style>
.trackpage .el-menu{margin-top: 10px;}
.trackpage .el-menu li{display:inline;}
.customerlist{display:flex;}
.cuslist{width:70%;}
.trackchoose{margin:10px 0;}
.trackchoose .el-date-editor{
    float:right;
}
</style>
<script>
    export default{
        data:function(){
            return {
                clicklist:[],
                tracklist:['0','0'],
                intervalid1:'',
                tracklist1: [{
                    value: '1',
                    label: '所有访客'
                }, {
                    value: '2',
                    label: '客户'
                }, {
                    value: '3',
                    label: '潜在客户'
                }, {
                    value: '4',
                    label: '陌生人'
                }],
                trackvalue1: '1',
                trackdate1:'',
                tracklist2: [{
                    index:1,
                    date: '2016-05-02',
                    behavior:'访问页面',
                    num:1,
                    name: 'angjy@socialbird.cn',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    index:2,
                    date: '2016-05-04',
                    behavior:'访问页面',
                    num:1,
                    name: 'angjy@socialbird.cn',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    index:3,
                    date: '2016-05-01',
                    behavior:'访问页面',
                    num:1,
                    name: 'angjy@socialbird.cn',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    index:4,
                    date: '2016-05-03',
                    behavior:'访问页面',
                    num:1,
                    name: 'angjy@socialbird.cn',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },
        methods:{
            track($event){
                // 获取点击元素的元素名称与内容添加到clicklist中
                this.clicklist.push({label:$event.target.tagName,value:$event.target.innerHTML});
            },
            formatter(row) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index) {
                this.$message.error('删除第'+(index+1)+'行');
            },
            choosedate(){
            }
        },
        mounted:function(){
            var _this=this;
            var data=new Date();
            this.tracklist[0] =data;
            // 建立一个计时器，每一秒产生一个时间值用于计算停留时间
            this.intervalid1=setInterval(function(){
                var data1=new Date();
                _this.tracklist[1] =data1;
            },1000);
        },
        beforeDestroy() {
            // 页面离开时要执行的事件
            // 清除定时器
            clearInterval(this.intervalid1);
        }
    };
</script>