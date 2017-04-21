<template>
	<div>
     	<div class='assemblybg' v-if='usermess.issend'></div>
		<div class='assembly' v-if='usermess.issend'>
			<div class="asscont">
				<p class='asscontTitle'>发送邮件<span class='assclose' @click='usermess.issend=false'>X</span></p>
				<!-- {{usermess.isemail[0].name}} -->
				<el-form ref="form" :model="form" label-width="80px">
				  <el-form-item label="发件人:">
				    <el-select v-model="form.name" placeholder="发件人:">
				    <el-option  v-for="item in options" :label="item.label" :value="item.value">
				    </el-option>
				  </el-select>
				  </el-form-item>
				  <el-form-item label="发送给:">
				    <el-select v-model="usermess.isemail[0].name" placeholder="联系人">
				      <el-option  v-for="item in usermess.isemail" :label="item.name" :value="item.name">
				    </el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="抄送给：" v-if='csbind'>
					<el-select v-model="value10" multiple filterable allow-create placeholder="" @change='cschange(value10)'>
				    	<el-option v-for="item in options5" :label="item.label" :value="item.value"></el-option>
				 	</el-select>
				  </el-form-item>
				  <el-form-item label="暗送给：" v-if='asbind'>
					<el-select v-model="value11" multiple filterable allow-create placeholder="" @change='aschange(value11)'>
				    	<el-option v-for="item in options6" :label="item.label" :value="item.value"></el-option>
				 	</el-select>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="text" @click="csbind=!csbind">{{this.csbind?'删除抄送':'添加抄送'}}</el-button>
				    <el-button type="text" @click="asbind=!asbind">{{this.asbind?'删除暗送':'添加暗送'}}</el-button>
				  </el-form-item>
				  <el-form-item label="主题：">
					<el-input v-model="emailtitle" placeholder="请输入主题"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button @click="fileload" type='file'>添加附件</el-button>
				    <el-input type='file' id='loadfile' ></el-input>
				    <el-button @click="mbbind=!mbbind">{{this.mbbind?'删除模板':'添加模板'}}</el-button>
				  </el-form-item>
				  <el-form-item label="正文：">
					<markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
				  </el-form-item>
				  <el-form-item class="moremass" v-if='moremass'>
				  	<el-checkbox v-model="Mtracking">邮件跟踪</el-checkbox>
				  	<el-checkbox v-model="Rreceipt">已读回执</el-checkbox>
				  	<el-select v-model="value12" placeholder="请选择">
				    <el-option
				      v-for="item in options7"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
				  </el-form-item>
				  <el-form-item>
				  	<el-button type="text" @click="moremass=!moremass">{{this.moremass?'隐藏选项':'更多选项'}}</el-button>
				  </el-form-item>

				  <el-form-item>
				    <el-button type="primary" @click="onSubmit">发送</el-button>
				    <el-button @click='usermess.issend=false'>取消</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>
<style>
.assemblybg{
	position: fixed;
	width: 100%;
	height:100%;
	background: #000;
	z-index: 1000;
	top:0;
	left:0;
	opacity: 0.2;
}
.assembly{
	position: fixed;
	z-index:1001;
	width:100%;
	height: 100%;
	left:0;
	top:0;
}
.asscont{
	position:absolute;
	width:1000px;
	left:50%;
	margin-left: -500px;
	background:#fff;
	top:30px;
}
.asscont .asscontTitle{
	background-color: #f9f9f9;
	height: 46px;
    padding: 10px;
    line-height: 28px;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #dedede;
    box-sizing: border-box;
}
.asscont .asscontTitle .assclose{
	float:right;
}
.asscont .el-form{padding:20px;}
.asscont .el-form .el-form-item{margin-bottom: 10px;}
.asscont .el-form .el-form-item .el-form-item__label{padding:7px 12px 7px 0;}
.asscont .el-form .el-form-item__content{line-height: 30px;}
.asscont .el-form .el-form-item__content .el-input__inner{line-height: 30px;height:30px;}
.asscont .el-form .el-form-item__content .el-select{width:100%;}
.asscont .el-form .CodeMirror{min-height:150px!important;}
.asscont .el-form .CodeMirror-scroll{min-height:150px;}
.asscont .el-form .moremass .el-form-item__content .el-select{width:auto;}
</style>
<script>
import { markdownEditor } from 'vue-simplemde';
	export default{
		props: [
            'usermess'				//接收父组件传过来的内容
        ],
         components: {
            markdownEditor   		//调用文本编辑器
        },
		data(){
			return {
				 form: {					//邮箱表单内容
		          name: '1@163.com',
		          person: ''
		        },
		        options:[{value: 'userid',label: '1@163.com'}],
		        options5:[],
		        value10:'',
		        options6:[],
		        value11:'',
		        csbind:false,
		        asbind:false,
		        fjbind:false,
		        mbbind:false,
		        emailtitle:'',
		        emailfile:'',
		        content:'',
                configs: {
                    status: true,
                    initialValue: 'Hello BBK',
                    renderingConfig: {
                        codeSyntaxHighlighting: true,
                        highlightingTheme: 'atom-one-light'
                    }
                },
                Mtracking:false,
                Rreceipt:false,
                moremass:false,
                options7: [{
		          value: '0',
		          label: '邮件优先级'
		        },{
		          value: '1',
		          label: '高'
		        }, {
		          value: '2',
		          label: '中'
		        }, {
		          value: '3',
		          label: '低'
		        }],
		        value12: '0',
		        
			}
		},
		methods:{
			onSubmit() {
		    	this.usermess.issend=false;
		    },
		    emailjudge(values){				//判断邮箱
		    		var isemails=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;  //'邮箱格式
		    		var valuelist=[];
		    		for(var i=0;i < values.length;i++){
			    		if(isemails.test(values[i])){
			    			 valuelist.push(values[i]);
			    		}
			    	}
			    	return valuelist;
		    },
		    cschange(values){
		    	if(values.length!=0){
		    		var valulist=this.emailjudge(values);
			    	if(this.value10.join(',')!=valulist.join(',')){
			    		 this.value10=valulist;
			    	}
		    	}
		    },
		    aschange(values){
		    	if(this.value11.length!=0){
		    		var valulist=this.emailjudge(values);
			    	if(this.value11.join(',')!=valulist.join(',')){
			    		 this.value11=valulist;
			    	}
		    	}
		    },
		    fileload(){
		    	console.log(1);
		    	document.getElementById('loadfile').focus();
		    }
		}
	}
</script>