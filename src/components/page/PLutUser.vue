<template>
    <div>
        <div class="crumbs">
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
                dataall:[],
                dialogVisible:false,
                msgshow:false
            };
        },
        mounted:function(){
        },
        components: {
            Datasource
        },
        methods: {
            binds(){
            },
            userbind(){
            },
            deleTh(values){
                this.deteteid=values;
                this.dialogVisible=true;
            },
            checkrest(){
            },
            changetype(){
            },
            checkemail(){
              
            },
            checkIndex(){
                
            },
            toshow(dname,uname) {
                var data1={username:uname,userType:dname,id:2};
                if(data1){
                    data1.id=3;
                }
            },
            primary(){
                this.dialogVisible=false;
                var dataarray=this.dataall;
                for (var i =0; i<this.dataall.length;i++){
                    for(var j=0;j<this.dataall[i].users.length;j++){
                        if(this.dataall[i].users[j].name==this.deteteid){
                            break;
                        }
                    }
                    dataarray[i].users.splice(j,1);
                }
                this.datas=dataarray;
            }
        }
    };
</script>

<style src="../../../static/css/datasource.css"></style>
