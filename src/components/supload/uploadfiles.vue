<template>
	<div class="upload" v-if='openup'>
	</div>
</template>
<script>
export default {

};
</script>
<style scoped>
	
.upload .box {
  position: fixed;
  height: 100%;
  width: 100%;
  min-width: 1200px;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.33);
}
.upload .upload-box{
  position: fixed;
  width: 720px;
  height: 542px;
  background: #FFFFFF;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.33);
  border-radius: 4px;
  z-index: 1;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.upload .upload-box .pic-attr, .upload .upload-box .pic-choose {
    margin-top: 30px;
    padding-left: 30px;
    font-size: 18px;
    color: #454953;
    letter-spacing: 0px;
    font-weight: bold;
}
.upload .upload-box .pic-choose {
    margin-top: 50px;
}
.upload .upload-box .kind-box {
    margin-top: 40px;
}
.upload .upload-box .name-box {
    margin-top: 20px;
}
.upload .upload-box .water-box {
    margin-top: 20px;
}
.upload .upload-box .kind-box, .upload .upload-box .name-box, .upload .upload-box .water-box {
    padding-left: 50px;
}
.upload .upload-box .kind-box p, .upload .upload-box .name-box p, .upload .upload-box .water-box p {
      font-size: 14px;
      color: #454953;
      letter-spacing: 0px;
      margin-right: 30px;
}
.upload .upload-box .kind-box select, .upload .upload-box .name-box select, .upload .upload-box .water-box select {
      outline: none;
      border: none;
      height: 30px;
      width: 190px;
      background: #FBFBFB;
      border-radius: 4px;
      font-size: 12px;
      color: #454953;
      letter-spacing: 0px;
      text-indent: 10px;
}
.upload .upload-box .kind-box input, .upload .upload-box .name-box input, .upload .upload-box .water-box input {
      outline: none;
      border: none;
      height: 30px;
      width: 340px;
      background: #FBFBFB;
      border-radius: 4px;
      font-size: 12px;
      color: #454953;
      letter-spacing: 0px;
      text-indent: 10px;
}
.upload .upload-box .kind-box .circle, .upload .upload-box .name-box .circle, .upload .upload-box .water-box .circle {
      margin-right: 7px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      border: 5px solid #EBEBEB;
}
.upload .upload-box .kind-box .choose, .upload .upload-box .name-box .choose, .upload .upload-box .water-box .choose {
      border: 5px solid #53AAE6;
}
.upload .upload-box .kind-box .true, .upload .upload-box .name-box .true, .upload .upload-box .water-box .true {
      margin-right: 50px;
}
.upload .upload-box .choose-box {
    margin-top: 30px;
    padding-left: 50px;
    margin-bottom: 20px;
    width: 300px;
}
.upload .upload-box .upload-pic {
    position: relative;
}
.upload .upload-box .upload-pic .upload-word {
      background: #53AAE6;
      border-radius: 4px;
      width: 125px;
      height: 30px;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
}
.upload .upload-box .upload-pic #Upload {
      cursor: pointer;
      width: 125px;
      height: 30px;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
}
.upload .upload-box .start-upload {
    background: #53AAE6;
    border-radius: 4px;
    width: 125px;
    height: 30px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}
.upload .upload-box .pic-msg-box {
    height: 160px;
    overflow: auto;
}
.upload .upload-box .pic-msg {
    padding-left: 50px;
}
.upload .upload-box .pic-msg .pic-name {
      font-size: 12px;
      color: #999999;
      letter-spacing: 0px;
      margin-right: 50px;
}
.upload .upload-box .pic-msg .pic-size {
      font-size: 12px;
      color: #999999;
      letter-spacing: 0px;
}
.upload .upload-box .pic-msg .pic-pro {
      background: #EBEBEB;
      border-radius: 4px;
      height: 10px;
      width: 332px;
}
.upload .upload-box .pic-msg .pic-pro .pic-pro-per {
        width: 0;
        height: 10px;
        background: #95D584;
        border-radius: 4px;
}
.upload .upload-box .pic-msg .pic-success, .upload .upload-box .pic-msg .prc-pro, .upload .upload-box .pic-msg .pic-error, .upload .upload-box .pic-msg .pic-wait {
      font-size: 12px;
      color: #95D584;
      letter-spacing: 0px;
      width: 130px;
      padding-left: 30px;
      height: 30px;
      line-height: 30px;
}
.upload .upload-box .pic-msg .prc-pro {
      padding-left: 10px;
      color: #999999;
}
.upload .upload-box .pic-msg .pic-error {
      color: #454953;
}
.upload .upload-box .pic-msg .pic-error .repeat {
        line-height: none;
        color: #53AAE6;
}
</style>
