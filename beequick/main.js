//引入模块 require()
require.config({
    paths:{
        'jquery':'public/lib/jquery-2.2.3',
        'flexible':'public/lib/flexible',
        'underscore':'public/lib/underscore.min',
        'backbone':'public/lib/backbone.min',
        'text' :'public/lib/text',
        'router':'router',
        'swiper':'public/lib/swiper-3.3.1.min',
        'fastclick':'public/lib/fastclick'
    }
});
//加载模块，当模块加载完毕之后，执行回调函数
require(['public/lib/flexible','router','fastclick'],function(flexible,router,FastClick){
    new FastClick(document.body);
});



