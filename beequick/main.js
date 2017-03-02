//引入模块 require()
require.config({
    paths:{
        'jquery':'public/lib/jquery-2.2.3',
        'flexible':'public/lib/flexible.js',
        'underscore':'public/lib/underscore.min',
        'backbone':'public/lib/backbone.min',
        'text' :'public/lib/text',
        'router':'router',
        'swiper':'public/lib/swiper-3.3.1.min',
<<<<<<< HEAD
        'fastclick':'public/lib/fastclick'
    }
});
//加载模块，当模块加载完毕之后，执行回调函数
require(['public/lib/flexible','router','fastclick'],function(flexible,router,FastClick){
    new FastClick(document.body);
});
=======
        'fastclick' : "public/lib/fastclick"
    }
});
//加载模块，当模块加载完毕之后，执行回调函数
require(['flexible','router','fastclick'],function(flexible,router,fastclick){
        console.log("模块加载成功");
        new fastclick(document.body);
});
>>>>>>> b72ab1f599332a1c96c0a6573e5e259681921063
