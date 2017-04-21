import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/customer'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/readme',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-echarts-v3组件
                },
                {
                    path: '/mixcharts',
                    component: resolve => require(['../components/page/MixCharts.vue'], resolve)    // vue-echarts-v3组件
                },
                {
                    path:'/plutuser',
                    component: resolve => require(['../components/page/PlutUser.vue'], resolve)     //绑定账号
                },
                {
                    path:'/customer',
                    component: resolve => require(['../components/page/Customer.vue'], resolve)       //客服互动  
                },
                {
                    path:'/assembly',
                    component: resolve => require(['../components/assembly/index.vue'], resolve)        //邮件回复
                },
                {
                    path:'/track',
                    component:resolve => require(['../components/assembly/track.vue'], resolve)        //页面追踪
                },
                {
                    path:'/uploadfile',
                    component:resolve => require(['../components/supload/uploadfiles.vue'], resolve)       // plupload文件上传组件
                },
                {
                    path:'/activitymarketing',
                    component: resolve => require(['../components/page/ActivityMarketing/ActivityMarketing.vue'], resolve),   // 活动营销组件
                    children:[
                        {
                            path: '/text',
                            component: resolve => require(['../components/page/ActivityMarketing/Text.vue'], resolve)    // 创建活动
                         }
                    ]
                },
                {
                    path:'/dialog',
                    component:resolve => require(['../components/assembly/dialo1g.vue'], resolve)       // dislog
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
