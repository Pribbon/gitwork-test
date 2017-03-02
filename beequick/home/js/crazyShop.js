/*主页疯狂秒杀*/
define(["jquery"],function(){
    var obj = {};
    obj.request = function(){
        /*加载疯狂秒杀-商品列表*/
        $.get('http://h5.yztctech.net/api/axf/apimiaosha.php',function(result,status,xhr){
            var data = result.product;
            var html = '';
            $.each(data,function(key,value){
                html += '<div class="goods-item">'
                    + '<a class="pic" href="javascript:;"><img src="'+ value.img +'"></a>'
                    + '<dl><dt class="title"><a href="javascript:;">'+ value.name +'</a></dt>'
                    + '<dd><p class="intro">'+ value.specifics +'</p>'
                    + '<p class="price">￥<strong>'+ value.price +'</strong><span>/原价:'+ value.market_price +'元</span></p>'
                    + '<p class="btn"><a href="javascript:;">'+ value.btnText +'</a></p></dd></dl></div>'
            });
            $("#active-goods").html(html);
        },'json');
    }

    return obj;
});
