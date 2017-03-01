//专门处理单页应用的功能
define(['jquery','underscore','backbone'],function($,_,backdone){
    //扩展路由功能
    var w = backdone.Router.extend({
        routes:{
            "home":"home",
            "market":"market",
            "order":"order",
            "shopcar":"shopcar",
            "my":"my",
            "crazyshop": "crazyshop",
            "*defAction":"defAction"
        },
        home:function(){
            //通过require来加载html页面，text属于require的一个解析文件的插件
            require(['text!./home/home.html','./home/js/home','./home/js/crazyShop'],function(tpl,ctrl,req) {
                $("#wrap-content-inner").html(tpl);
                ctrl.request();
                req.request();
            });
        },
        market:function(){
            require(['text!./market/market.html','./market/js/market'],function(tpl,req){
                $("#wrap-content-inner").html(tpl);
                req.request('天天特价');
            });
        },
        order:function(){
            require(['text!./fresh/fresh.html','./fresh/js/fresh'],function(tpl,req) {
                $("#wrap-content-inner").html(tpl);
                req.request();
            });
        },
        shopcar:function(){
            require(['text!./shopCar/shopCar.html'],function(tpl){
                $("#wrap-content-inner").html(tpl);
            });
        },
        my:function(){
            require(['text!./my/my.html'],function(tpl){
                $("#wrap-content-inner").html(tpl);
            });
        },
        /*crazyshop:function(){
         require(['text!.ca'])
         },*/
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
