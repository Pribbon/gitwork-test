/*闪送超市*/
define(['jquery'],function($){
    var obj = {};
    /*加载闪送超市商品数据*/
    obj.request = function(category){
        console.log(22222);
        $.ajax({
            type: 'get',
            url: 'http://h5.yztctech.net/api/axf/apicategory.php?category=' + category,
            async: true,
            dataType: 'json',
            success:function(result,status,xhr){
                var data = result.data;
                var html = '';
                $.each(data,function(key,value){
                    html += '<dd class="goods-items"><a href="javascript:;">'
                        + '<img class="product-image" src="'+ value.img +'"></a>'
                        + '<p class="p-title p-ellipsis">'+ value.name +'</p>'
                        + '<p class="tag"><span class="p-tag selection">精选</span>'
                        + '<span class="p-tag gift">'+ value.pm_desc +'</span></p>'
                        + '<div><p class="p-intro p-ellipsis">'+ value.specifics +'</p>'
                        + '<p class="p-price">￥'+ value.price +'</p>'
                        + '<a href="#addCar" class="add-car-fly"><span class="icon-font add-goods"></span></a></div>'
                        + '</dd>'
                });
                $('#market-goods-item').html(html);
            }
        },'json');
    };

    obj.getUrl = function(){
        $('goods-category-list li a').click(function(e){
                console.log(e);
        });
    };

    obj.clickCurrent =function(){
        $('.goods-category-list li a').click(function(){
            $(this).attr("class","current");
            $(this).parent("li").siblings("li").children("a").removeClass("current");
        });
    };

    return obj;
});