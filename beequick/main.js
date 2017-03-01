//引入模块 require()
require.config({
    paths:{
        'jquery':'lib/jquery-2.2.3',
        'flexible':'lib/flexible',
        'underscore':'./lib/underscore.min',
        'backbone':'./lib/backbone.min',
        'text' :'./lib/text',
        'router':'router',
        'swiper':'./lib/swiper-3.3.1.min'
    }
});
//加载模块，当模块加载完毕之后，执行回调函数
require(['jquery','flexible','router','swiper'],function($,flexible,router,swiper){
        console.log("模块加载成功");
});