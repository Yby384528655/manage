exports.install = function (Vue) {
    Vue.prototype.Apilist={
        //登陆
        'getaccount':('/api/getAccount'),
        'ajax':(data)=>{
            return Vue.http.get('https://snscn.joinf.com/api/getAccount',data);
        },

    };
    Vue.prototype.getApiList=function(_this, type){
        return Vue.prototype.Apilist[type];
    };
    Vue.prototype.get = function (_this,url){
        return _this.$http.get(url);
    };
    Vue.prototype.post = function (_this,url){
        return _this.$http.post(url);
    };
};