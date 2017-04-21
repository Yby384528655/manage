<template>
	<div>
		<label for='#fileupload' @click='choosemi'>文件上传</label>
		<input type='file'  id='fileupload'>
	<div id="qunit">12</div>
    <div id="qunit-fixture" style="position: relative; top: 0 !important; left: 0 !important; width: 100%; height: 9px;">12</div>

    <input type="file" class="upload" id="Upload" multiple="multiple" @change="getfile_logo" accept="*"/>
	</div>
</template>
 <script>
import Plupload from 'Plupload'
// import myplusin from 'D:/work/manage-system-master/static/js/myplusin.js'
// import Vue from 'vue'
// Vue.use(myplusin);
// Vue.use(Plupload);
// console.log(myplusin);
export default{
	data:function(){
		return {
			uploader:'',
			host:null,
		}
	},
	methods:{
		choosemi(){
			// console.log(1);
			var abc= new Plupload.Uploader()
		},
		signature(_this, type) {
			_this.$http.post('/common/get_product_policy_signature/GetProductPolicySingnature', {
					type: type || parseInt(sessionStorage.getItem("pic_type")),
				})
				.then((response) => {
					let msg = JSON.parse(response.data)
					if (msg.retcode != 0) {
						_this.$store.dispatch('alert-msg', msg.msg)
						_this.$store.dispatch('alert-start')
						return
					}
					_this.access_url = msg.resp.access_url
					_this.accessid = msg.resp.accessid
					_this.expire = msg.resp.expire
					_this.host = msg.resp.host
					_this.key = msg.resp.key
					_this.oss_bucket = msg.resp.oss_bucket
					_this.policy = msg.resp.policy
					_this.signature = msg.resp.signature
				})
		},
		getfile_logo(){
			this.files=document.querySelector('#Upload').files
			console.log(this.files)
			let from=new FormData()
			let now_time=new Date().getTime()
			from.append('OSSAccessKeyId',this.accessid)
			from.append('key',this.key+now_time+'_'+'${filename}')
			from.append('policy',this.policy)
			from.append('signature',this.signature)
			from.append('file',this.files[0])
			this.$http.post(this.host,from)
			.then((response) => {
				this.logo_url=this.access_url+this.key+now_time+'_'+this.files[0].name
			})
		}
	},
	mounted:function(){
		console.log(Plupload)
	}
}
</script>