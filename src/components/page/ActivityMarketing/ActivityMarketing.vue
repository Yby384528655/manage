<template>
    <div></div>
</template>
<script>
   
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
