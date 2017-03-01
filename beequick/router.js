//专门处理单页应用的功能
define(['jquery','underscore','backbone','swiper'],function($,_,backdone,swiper){
    //扩展路由功能
    var w = backdone.Router.extend({
        routes:{
            "home":"home",
            "market":"market",
            "order":"order",
            "shopcar":"shopcar",
            "my":"my",
            "*defAction":"defAction"
        },
        home:function(){
            //通过require来加载html页面，text属于require的一个解析文件的插件
            require(['text!./home/home.html','./home/js/home'],function(tpl,ctrl){
               $("body").prepend(tpl);
               ctrl.request();
            });
        },
        //页面初始化
        initialize:function(){
            window.location.hash = "home";//设置初始化时跳转的页面
        },
        defAction:function(){
            require(["text!404.html"],function(tpl){
                $("body").html(tpl);
            });
        }
    });
    //新建路由对象
    var router = new w();
    backdone.history.start();
});
