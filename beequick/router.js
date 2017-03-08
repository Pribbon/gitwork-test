//专门处理单页应用的功能
define(['jquery','underscore','backbone'],function($,_,backdone){
    //扩展路由功能
    var w = backdone.Router.extend({
        routes:{
            "home":"home",
            "localPosition" : "localPosition",

            "market":"market",

            "order":"order",

            "shopcar":"shopcar",

            "my":"my",

            "crazyshop": "crazyshop",
            "crazyData": "crazyData",

            "addCar":"addCar",
            
            "search" : "search",
            "goodslist" : "goodslist",

            "*defAction":"defAction"
        },
        home:function(){
            //通过require来加载html页面，text属于require的一个解析文件的插件
            require(['text!./home/home.html','./home/js/home','./home/js/crazyShop','public/js/index','public/js/index_db','text!./public/wx.php'],function(tpl,ctrl,req,res,indexDB) {
                $("#wrap-content-inner").html(tpl);
                ctrl.request();
                req.request();
                res.addCar();
                indexDB.createDataBase();
                res.addDataBase();
                // storage.inserInfo();
<<<<<<< HEAD
                $("#scan").click(function () {
                    wxObj.scanCode();
                })
=======
                ctrl.scanCode();
>>>>>>> cf59ee9858d63d919b929e62dfe76c4a4335b57e
                ctrl.localPosition();
            });
        },
        market:function(){
            require(['text!./market/market.html','./market/js/market','public/js/index'],function(tpl,req,res){
                $("#wrap-content-inner").html(tpl);
                req.request();
                req.getUrl();
                req.clickCurrent();  //切换current样式
                req.localPosition();
                res.addCar();
                res.addDataBase();
            });
        },
        order:function(){
            require(['text!./fresh/fresh.html','./fresh/js/fresh','public/js/index'],function(tpl,req) {
                $("#wrap-content-inner").html(tpl);
                req.request();
            });
        },
        shopcar:function(){
            require(['text!./shopCar/shopCar.html','./shopCar/js/shopCar','public/js/index'],function(tpl,act){
                $("#wrap-content-inner").html(tpl);
                act.reduceGoods();
                act.addDataBase();
                act.checkProduct();
            });
        },
        my:function(){
            require(['text!./my/my.html','public/js/index'],function(tpl){
                $("#wrap-content-inner").html(tpl);
            });
        },
        crazyData:function(){
            require(['text!./home/crazyShop.html','./home/js/crazyShop'],function(tpl,req){
                $("#wrap-content-inner").html(tpl);
                req.request();
            });
        },
        goodslist:function(){
        	require(['text!./goodsList/product_list01.html'],function(tpl){
        		$('.scroll-wrap').html(tpl);
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
