<template>
	<div>
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
        };
    },
    methods:{
    }
};
</script>