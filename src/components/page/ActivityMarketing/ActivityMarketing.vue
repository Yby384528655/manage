<template>
    <el-row>
      <el-col :span="24"><div class="">
          <div class="grid-content-text">活动营销</div>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" style="border:1px solid red;">
            <el-tab-pane label="创建活动" name="first" style="border:1px solid blue;">  <!-- tab标签页创建活动 -->
                <el-steps :space="100" :active="1" finish-status="success">      <!-- 进度条 -->
                  <el-step title="选择模板"></el-step>
                  <el-step title="编辑内容"></el-step>
                  <el-step title="活动设置"></el-step>
                  <el-step title="活动推广"></el-step>
                </el-steps>
                <div style="margin: 15px 0;"></div>
               <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>  <!-- 多选框 -->
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                 <el-checkbox v-for="city in cities" :label="city">{{city}}</el-checkbox>
              </el-checkbox-group>
              <el-row :gutter="30" class="el-row-activity" id="text">
                <el-col :span="6"class="el-col-activity" v-for="  ( img,index) in MImg":label="MImg" >    <!-- 图片内容 -->
                    <div class="grid-content bg-purple" v-on:mouseenter="visible(index)" @mouseleave="invisible(index)"v-bind:id="index"  >
                        <img class="user-logo" v-bind:src=" img  ">
                        <div class="activity-mask" v-if=" show == index " >
                        </div>
                        <p class="share-view"  v-if=" show == index " >
                             <b   v-on:click="Preview"><i class=" el-icon-view"></i></b>
                             <b><i type="primary" class="el-icon-check"></i></b>
                        </p>
                    </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">    <!-- 分页 -->
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple">

                    </div>
                </el-col>
              </el-row>

              <el-row  v-if="activityPreview" class="activity-Preview">    <!--预览功能 -->
                  <el-col :span="24" >
                      <div >

                       </div>
                  </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="我的活动" name="second">        <!-- tab标签页我的活动 -->
            我的活动页面
            </el-tab-pane>
            <el-tab-pane label="数据分析" name="third">        <!-- tab标签页数据分析 -->
            数据分析页面


            </el-tab-pane>

          </el-tabs>

        </div>
      </el-col>
    </el-row>
</template>
<script>
    var  cityOptions = ['Lead Generation','Lead Gen[Two Step]', 'White Paper', 'Click Through'];       //复选框
    var  MImg = ['../../../../static/img/img.jpg','../../../../static/img/img.jpg', '../../../../static/img/img.jpg'
    , '../../../../static/img/img.jpg','../../../../static/img/img.jpg', '../../../../static/img/img.jpg', '../../../../static/img/img.jpg'];   //AJAX遍历生成数组；
    var ShowS=[false,true,false,false,false,false,false,false,false,false]   ;     //显示隐藏
    app.$el === document.getElementById('text');
    console.log( app.$el);
    export default {
        data() {
            return {
                activeName2: 'first',
                items:'visible',
                checkAll: true,//复选框
                checkedCities: ['Lead Generation'],//复选框
                cities: cityOptions,    //复选框
                isIndeterminate: true,  //复选框
                show:null,   //显示隐藏
                MImg:MImg,  //图片数组
                activityPreview:true
         };
    },
    methods: {
        handleClick(tab, event) {   //tab标签页
            console.log(tab, event);
        },
        handleCheckAllChange(event) {
            this.checkedCities = event.target.checked ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {//复选框
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        visible:function(index){  //显示遮罩层
            this.show = index;
        },
        invisible:function(index){//隐藏遮罩层
            this.show = null;
        },
        Preview(index){  //活动预览
            //点击后显示页面。
            this.activityPreview=true;
        }
    }
  };
</script>
  <style>
        .el-tabs__nav{
            margin-left:200px;
        }
        .grid-content-text{
             width:200px;
             height:42px;
             text-align: center;
             line-height:42px;

             position:absolute;
             top:0px;
             left:0px;
             font-size:20px;
        }
        /*标签页位移*/
        .el-tab-pane{
                min-height:600px;
        }
        /*内容页样式设定*/
        .el-row-activity {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
        }
        .el-col-activity {
            border-radius: 4px;
        }
        .bg-purple-dark {
            background: #99a9bf;
          }
        .bg-purple {
            background: #d3dce6;
          }
        .bg-purple-light {
            background: #e5e9f2;
          }
        .grid-content {
            border-radius: 4px;
            min-height: 36px;
            border:2px solid black;
            margin-top:20px;
            position:relative;
          }
        .grid-content>img{
            width:75%;
            margin:auto;
            display:block;
            z-index:100;
        }
        /*遮罩层*/
        .activity-mask{
            width:100%;
            height:100%;
            background: white;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
        }
        /*预览与使用*/
        .share-view{
            width: 100%;
            height: 100px;
            position:absolute;
            top:38%;
            left:0;
            z-index:100;
            padding-left:33%;
        }
        .share-view>b{
              display: inline-block;
              width:36px;
              height:36px;
              border-radius: 50%;
              border: 1px solid grey;
              background:red;
              margin-right:15px;
        }
        .share-view>b>i{
            padding:10px 0px 0px 7px;
        }
        .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
        }
        /*预览*/
        .activity-Preview{
             width: 100%;
             min-height: 700px;
             background: #568c3b;
             position: absolute;
             top: 0;
             left: 0;
             z-index: 300;
        }
    </style>
<style src="../../../../static/css/datasource.css"></style>
