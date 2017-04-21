function set_upload_param(field,up,module,type,openFlag){
		$.ajax({
    		type:'POST',
    		url:'/getPolicy.html',
    		async: false,
    		contentType:'application/json;charset=UTF-8',
    		data:JSON.stringify({
    			type: type,
		        imgFolder:module,
		        userPath:'false',
		        openFlag:openFlag
    		}),
    		success:function(result){
    			var values = result;
    			if (result.success) {
    				field.hostUrl = values.key.host;
	    			up.setOption({
				        'url': values.key.host,
				        'multipart_params': {
				        	'success_action_status' : '200',
							'key' : values.key.dir,
					        'policy': values.key.policy,
					        'OSSAccessKeyId': values.key.accessid, 
					        'host': values.key.host, 
					        'signature': values.key.signature, 
					        'expire': values.key.expire, 
					        'callback': values.key.callback, 
					        'x:companyid' : 1,
					        'x:operatorid' : values.operatorId,
					        'x:boxid' : null,
					        'x:module' : 'teacher',//上传附件的模块,
					        'domain':document.domain
				        }
				    });
	    			up.start();
				}else {
				}
    		},
    		error:function(XMLHttpRequest, textStatus, errorThrown){
    		},
    		complete: function (XHR, TS) {
    		},
    		cache: false
    	});
	}

	function uploadOSSFile(field,module,type,openFlag){
	      var uploader = new plupload.Uploader({ //实例化一个plupload上传对象
			browse_button : field.id,
			url : '../fileupload.html',
			flash_swf_url : '../js/Moxie.swf',
			buttonText:'test',
			silverlight_xap_url : '../js/Moxie.xap',
			filters: {
			  mime_types : [ //只允许上传图片文件和rar压缩文件
				{ title : "附件" , extensions :"jpg,gif,png,Jpeg" /*"jpg,gif,png,bmp,jpeg,pdf,docx,pptx,xlsx,ppt,xls,doc,/all"*/ }
			  ],
			  max_file_size : '1M', //最大只能上传10MB的文件
			  fileNumLimit: 2,
			  prevent_duplicates : false //不允许队列中存在重复文件
			},
			multipart_params:{
			},
			file_data_name: 'file',//名称对应
			init: {
				PostInit: function() {
					$('body').on('click','#'+field.id,function(){
						set_upload_param(field,uploader,module,type,openFlag);
						return false;
					});
				},
				Error: function(up, err) {
					var _tipsHtmlStrE = '';
					
					switch(err.code){
						case -600:
							_tipsHtmlStrE = '图片上传大小不能超过1MB';
						break;
						
						case -601:
							_tipsHtmlStrE = '图片上传格式不正确';
						break;
						
						default :
							_tipsHtmlStrE = '图片上传异常'; //异常
						break;
					}
					Ext.Msg.show({
						title: '提示',
						msg: _tipsHtmlStrE,
						icon: Ext.Msg.INFO,
						buttons: Ext.Msg.OK
					});
				}
			}
		});
		uploader.init(); //初始化
	
		//绑定文件添加进队列事件
		uploader.bind('FilesAdded',function(uploader,files){
			uploader.start(); //开始上传
		});
	
		
		//绑定单个文件上传完成事件
		uploader.bind('FileUploaded',function(uploader,file,responseObject){
			var result = JSON.parse(responseObject.response);//JSON解析器，转换为对象。result:success,error		
			field.textField.setValue(result.key);
			if(field.showPanel){
				if(field.openFlag && field.openFlag == 1){
					
					field.showPanel.setSrc(field.hostUrl+"/"+result.key);
				}else{
					field.showPanel.setSrc(result.url);
				}
			}
			if(field.recommend_width && field.recommend_height){
				if(result.width != field.recommend_width || result.height != field.recommend_height)
					Ext.Msg.show({
						title: '图片尺寸不匹配',
						msg: "推荐尺寸:" +field.recommend_width+"*"+field.recommend_height+","+"上传尺寸:"+result.width+"*"+result.height,
						icon: Ext.Msg.INFO,
						buttons: Ext.Msg.OK
					});
			}
		});
	}