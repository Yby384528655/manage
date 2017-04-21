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
			    	<div class='listcontright'>
			    		<p><span>{{data.name}}</span> &nbsp;&nbsp; 评论了 &nbsp; {{data.users.name}} &nbsp;&nbsp;&nbsp;&nbsp; {{data.time}} </p>
			    		<p>{{data.content}}</p>
			    		<div class='listusercont'>
			    			<img v-bind:src='data.users.tx'>
			    			<p>{{data.users.name}}</p><br>
			    			<p>{{data.users.content}}</p>
			    		</div>
			    		<div class='handle'>
			    			<span><i class="el-icon-search"></i></span>
			    			<span><i :class="data.istrue?'el-icon-star-on':'el-icon-star-off'"></i></span>
			    			<span><i class="el-icon-setting"></i></span>
			    			<span><i class="el-icon-edit"></i></span>
			    		</div>
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
						<!-- <p>消息类型<span>全选</span></p>
						<ul>
							<li v-for='usertype in usertypes'>
								<el-checkbox v-model="usertype.istrue">	</el-checkbox>
								<img :src='usertype.icon'>
								<span>{{usertype.name}}</span>
							</li>
						</ul> -->
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
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
		        },{
		        	name:'VK主页',
		        	content:'good',
		        	type:'fackbook',
		        	time:'23小时之前',
		        	istrue:false,
		        	icon1:'../../../static/img/img.jpg',
		        	users:{name:"VK主页1",tx:'../../../static/img/img.jpg',istrue:false,content:'It is very good'}
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
		}
	},
	methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSizeChange(val){
      	// this.datas=this.dataall.slice(10*(val-1),10);
      },
      handleCurrentChange(val){
      	console.log(val);
      	this.datas=this.dataall.slice(10*(val-1),10*(val));
      },
      choosedate(val){
      	// console.log(val);
      	console.log(this.value7);
      	this.data1=new Date(this.value7[0]);
      	this.data2=new Date(this.value7[1]);
      	// console.log(this.data2-this.data1);
      },
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? this.cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      datasql(){
      	var datalist=[];

      }
    },
    mounted:function(){
  //   	if(this.$route.query.type){
		// console.log(this.$route.query.type);

		// }
    	if(this.dataall.length<=10){
    		this.datas=this.dataall;
    	}else{
    		this.datas=this.dataall.slice(0,10);
    	}
    	this.datalength=this.dataall.length;
    	this.cities=this.usertypes;
    	for(var i=0;i<this.usertypes.length;i++){
    		if(this.usertypes[i].istrue){
    			this.checkedCities.push(this.usertypes[i]);
    		}
    	}
    	// this.checkedCities=this.usertypes
    	this.checkedCities1=this.checkedCities;
    	console.log(this.checkedCities);
    }
}

</script>