<template>
    <div>
        <div class="crumbs">
 <!--            <div class='curmright'>
            	<span>鸟</span>
            	<span>ffff</span>
            	<span>you</span>
				<el-select v-model="value4" clearable placeholder="请选择" @change='changetype()'>
				    <el-option
				      v-for="item in options" 
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
			</div> -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>社交平台绑定</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class='userlist'>
	        <div v-for='data in datas' class='showlist'>
	        	<div class='usersleft'>
	        		<img v-bind:src='data.icon1'>
	        		{{data.name}}
	        	</div>
	        	<div class='usersright'>
	        		<div class="binds" @click='binds(data.name,data.type)'>
	        			<p>绑定{{data.name}}</p>
	        		</div>
	        		<div v-for='user in data.users'>
	        			<img :src='user.logoUrl'>
	        			<p>{{user.userName}}</p>
	        			<el-switch
					  	v-model="user.pagingRequired" @change='toshow(data.name,user.userName)'
						  on-text=""
						  off-text="">
						</el-switch>
						<span @click='deleTh(user.name)' class='delete'>X</span>
	        		</div>
	        	</div>
	        	<el-dialog title="提示" v-model="dialogVisible" size="tiny">
				  <span>是否删除用户{{deteteid}}</span>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="dialogVisible = false">取 消</el-button>
				    <el-button type="primary" @click="primary()">确 定</el-button>
				  </span>
				</el-dialog>
	        </div>

	    </div>
        <!-- 弹出框 -->
     	<div class='msgbgs' v-if='msgshow'></div>
     	<div class="msgadd" v-if='msgshow'>
     		<div class="msgaddcont" v-if='isIndex'>
     			<p class='msgaddtitle'>添加主页<span @click='msgshow=false'>X</span></p>
     			<el-select v-model="value5" placeholder="请选择" @change='checkrest(value5)'>
				    <el-option
				      v-for="item in options1"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
     			<ul >
     				<li v-for='restcont in restlist' @click='changestate(restcont.value)'>{{restcont.value}}</li>
     			</ul>
					<el-button type="primary" @click='checkIndex'>确定</el-button><el-button @click='msgshow=false'>取消</el-button>
     		</div>
     		<div class='msgaddcont' v-if='isEmail'>
     			<p class='msgaddtitle'>添加邮箱<span @click='msgshow=false'>X</span></p>
     			<el-form ref="form" :model="form" label-width="80px">
				  <el-form-item prop="email" label="邮箱" :rules="[
				      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
				      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
				    ]">
				    <el-input v-model="form.email"></el-input>
				  </el-form-item>
				  <el-form-item prop="password" label="密码" :rules="[
				      { required: true, message: '请输入密码', trigger: 'blur' },
				      { type: 'password', message: '密码格式不正确', trigger: 'blur,change' }
				    ]">
				    <el-input v-model="form.password" type='password'></el-input>
				  </el-form-item>
				  <el-button type="primary" @click='checkemail'>确定</el-button><el-button @click='msgshow=false'>取消</el-button>
				</el-form>
     		</div>
     	</div>

     </div>

</template>

<style>
.userlist{
	border:1px solid #000;
	padding:10px;
}
.showlist{
	border:1px solid #000;
}
.usersleft{
	float:left;
	height:60px;
	margin:10px 5px;
	line-height: 60px;
	margin-right: 50px;
}
.showlist img{
	width:40px;
	height:40px;
	float:left;
	margin:10px 10px 0 10px;
	background:#ccc;
}
.usersright{
	display: flex;
	position:relative;
	right:0;
	flex-direction:row-reverse;
	flex-wrap: wrap; 
}
.usersright>div{
	width:200px;
	height:60px;
	border:1px solid #000;
	margin:10px 5px;
	line-height: 30px;
	position:relative;
	background:#eee;
}
.usersright>div p{
	width:110px;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
}
.usersright .delete{
	position:absolute;
	display:block;
	width:30px;
	height:30px;
	right:10px;
	top:15px;
	font-size:30px;
	text-align: center;
	line-height: 30px;
	border:1px solid #000;
}
.usersright .binds p{
	line-height: 60px;
	margin-left: 10px;
	width:100%;
}
.el-switch{
	vertical-align: top;
}
.msgbgs{
	position: fixed;
	width: 100%;
	height:100%;
	background: #000;
	z-index: 1000;
	top:0;
	left:0;
	opacity: 0.2;
}
.msgadd{
	position: fixed;
	width: 100%;
	height:100%;
	z-index: 1001;
	top:0;
	left:0;
}
.msgadd .msgaddcont{
	width:500px;
	height:400px;
	position: absolute;
	top:50%;
	margin-top: -200px;
	left: 50%;
	margin-left: -250px;
	background: #fff;
	text-align: center;
}
.msgaddtitle{
	background:#00d1b2;
	padding:5px 10px;
	color:#fff;
	font-size: 16px;
	text-align: left;
}
.msgaddtitle span{
	float:right;
}
.msgaddcont .el-select{
	margin:30px auto 0;
	float:none;
	width:70%;
	height:40px;
	line-height: 40px;
	border-radius: 5px;
}
.msgaddcont ul{
	max-height: 200px;
	overflow: auto;
	margin:0 auto 30px;
	width:70%;
}
.msgaddcont ul li{
	list-style: none;
	width:90%;
	text-align: left;
	padding-left: 20px;
	line-height: 30px;
}
.el-autocomplete, .el-dropdown{
	width:100%;
}
.msgaddcont .el-form-item{
	width:70%;
	margin:30px auto;
}
</style>
<script>
    // import axios from 'axios';
    import Datasource from 'vue-datasource';
    export default {
        data: function(){
        	
            return {
                type:'',
                deteteid:'',
                options: [{
		          value: '1',
		          label: '使用socialbird代理服务绑定'
		        }, {
		          value: '2',
		          label: '在VPN环境下绑定',
		          select:true,
		        }],
		        value4: '2',
                options1: [],
		        value5: '1',
		        restlist:[],
		        isIndex:false,
		        isEmail:false,
		        istype:'',
		        form: {
			        email: '',
			        password: '',
			    },
		        datas:[],
		        dataall:[{
		        	name:'email',
		        	type:'email',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'twitter',
		        	type:'twitter',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'facebook',
		        	type:'facebook',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'facebook主页',
		        	type:'facebook',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'Linkedln',
		        	type:'Linkedln',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'Linkedln主页',
		        	type:'Linkedln',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'YouTube',
		        	type:'YouTube',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'VK',
		        	type:'VK',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        },{
		        	name:'VK主页',
		        	type:'VK',
		        	icon1:'../../../static/img/img.jpg',
		        	users:[]
		        }],
		        dialogVisible:false,
		        msgshow:false
            }
        },
        mounted:function(){
        	var data1={};
      //   	this.$http.post('http://192.168.0.69:8080/SocialAccount/getSocialAccount',data1,{contentType : "application/json",data : JSON.stringify(data1),}).then(function(response){
    		// 	var udata=response.data.data;
    		// 	if(udata){
	    	// 		for (var i=0; i<udata.length;i++){
	    	// 			for (var j=0;j<this.dataall.length;j++){
	    	// 				if(udata[i].userType==this.dataall[j].type && this.dataall[j].name==this.dataall[j].type){
	    	// 					this.dataall[j].users.push(udata[i]);
	    	// 				}
	    	// 			}
	    	// 		}
    		// 	}
    		// },function(response){
    		// 	 this.$message(response.data.errMsg);
    		// })
    		// this.$http.post('http://192.168.0.69:8080/SocialMainpage/getSocialMainpageByAccount',data1,{contentType : "application/json",data : JSON.stringify(data1),}).then(function(response){
    		// 	var udata=response.data.data;
    		// 	if(udata){
	    	// 		for (var i=0; i<udata.length;i++){
	    	// 			for (var j=0;j<this.dataall.length;j++){
	    	// 				if(udata[i].userType==this.dataall[j].type && this.dataall[j].name!=this.dataall[j].type){
	    	// 					this.dataall[j].users.push(udata[i]);
	    	// 				}
	    	// 			}
	    	// 		}
    		// 	}
    		// },function(response){
    		// 	 this.$message(response.data.errMsg);
    		// })
        	this.datas=this.dataall;
        },
        components: {
            Datasource
        },
        methods: {
            binds(values,type){
            	this.istype=type;
            	if(values.indexOf('主页')>=0){
	            	this.isEmail=false;
	            	this.isIndex=true;
	            	this.msgshow=true;
	            	console.log(this.istype);
	            // 	var data1={userType:'fackbook'}
	            // 	this.$http.post('http://192.168.0.69:8080/SocialMainpage/addSocialMainpage',data1,{contentType : "application/json",data : JSON.stringify(data1),}).then(function(response){
            	// 		console.log(values);
            	// 	},function(response){
            	// 		console.log('error');
            	// 	})
            	}else if(values.indexOf('email')>=0){
	            	this.isIndex=false;
	            	this.isEmail=true;
	            	this.msgshow=true;
            	}else{
            		console.log(values);
            		this.userbind(values);
            	}
            },
            userbind(values){
            	var data1={type:'2'}
            	this.$http.get('http://192.168.0.63:8080/api/getRedirectUrl?type='+2).then(function(response){
            			console.log(values);
            			window.open(response.data);
            		},function(response){
            			console.log(response.error);
            		})
            },
            deleTh(values){
            	var data1={id:'1'}
            		// this.$http.post('http://192.168.0.69:8080/SocialAccount/delSocialAccount',data1,{contentType : "application/json",data : JSON.stringify(data1),}).then(function(response){
            		// 	console.log(values);
            		// },function(response){
            		// 	console.log('error');
            		// })
            	this.deteteid=values;
            	this.dialogVisible=true;
            },
            checkrest(values){
            	console.log(values);
            },
            changetype(){
            	// console.log(this.value4);
            	// var dataarray=[];
            	// for (var i =0; i<this.dataall.length;i++){
            	// 	if(this.dataall[i].name==this.value4){
            	// 		dataarray.push(this.dataall[i]);
            	// 	}
            	// }
            	// this.datas=dataarray;
            },
            checkemail(){
            	var isemails=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/; 
            	if(isemails.test(this.form.email)){
            	var data1={userName:this.form.email,password:this.form.password};
            	this.$http.post('http://192.168.0.69:8080/SocialAccount/checkMailAccount',data1,{contentType : "application/json",data : JSON.stringify(data1),}).then(function(response){
            			this.$message({message: '绑定成功',type: 'success'});

            			this.dataall[0].users.push({userName:this.form.email,logoUrl:"https://fttx-tms-cloud.oss-cn-hangzhou.aliyuncs.com/file/nbzmwlkjyxgs/manage/20170103/bHIOfNR5BYSJS3mq/QQ%E5%9B%BE%E7%89%8720161019175704.jpg?Expires=1489835694&OSSAccessKeyId=SKwReecKVjmzZtGt&Signature=Mt%2BasQhKZbc3m3u15tDQ%2BWQkLdw%3D","userType":"email","createTime":1489814777000,"updateTime":1489814991000,pagingRequired:true});
            			this.msgshow=false;
            		},function(response){
            			this.$message.error(response.data.errMsg);
            		})
            	}else{
            		this.$message.error('请输入正确的邮箱地址！');
            	};
            	
            },
            checkIndex(values){
            	var data1={token:'986c9a053d99ad662a5bcc2c323e4362',tokenExpire:'100000',userType:'values',userName:'张三',password:'123456'};
        		// this.$http.post('http://192.168.0.69:8080/SocialAccount/addSocialAccount',data1,{contentType : "application/json",data : JSON.stringify(data1),}).then(function(response){
        		// 	console.log(response);
        		// },function(response){
        		// 	console.log('error');
        		// })
            },
            toshow(dname,uname){
            	console.log(uname);
            	var data1={userType:dname,id:2}
          //   	this.$http.post('http://192.168.0.69:8080/SocialAccount/enableSocialAccount',data1,{contentType : "application/json",data : JSON.stringify(data1),}).then(function(response){
		        //     	var dataarray=this.dataall;
		        //     	for (var i =0; i<this.dataall.length;i++){
		        //     		if(dataarray[i].name==dname){
			       //      		for(var j=0;j<dataarray[i].users.length;j++){
			       //      			if(dataarray[i].users[j].userName!=uname){
			       //      				dataarray[i].users[j].pagingRequired=false;
			       //      				console.log(dataarray[i].users[j].pagingRequired);
			       //      			}else{
			       //      				dataarray[i].users[j].pagingRequired=true;
			       //      				console.log(dataarray[i].users[j].pagingRequired);
			       //      			};
			       //      		};
		        //     		}
		        //     	};
		        //     	this.datas=dataarray;
	        	// 	},function(response){
	        	// 		console.log('error');
	        	// 	}
	        	// )
            },
            primary(){
            	this.dialogVisible=false;
            	var dataarray=this.dataall;
            	for (var i =0; i<this.dataall.length;i++){
            		for(var j=0;j<this.dataall[i].users.length;j++){
            			if(this.dataall[i].users[j].name==this.deteteid){
            				break;
            			};
            		};
            		dataarray[i].users.splice(j,1);
            	};
            	this.datas=dataarray;

            }
        }
    }
</script>

<style src="../../../static/css/datasource.css"></style>
