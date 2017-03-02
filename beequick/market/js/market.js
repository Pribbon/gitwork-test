/*闪送超市*/
define(['jquery'],function($){
    var obj = {};
    /*加载闪送超市商品数据*/
    obj.request = function(category){
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
                        + '<img class="product-image" src="'+ value.img +'">'
                        + '<p class="p-title p-ellipsis">'+ value.name +'</p>'
                        + '<p class="tag"><span class="p-tag selection">精选</span>'
                        + '<span class="p-tag gift">'+ value.pm_desc +'</span></p>'
                        + '<p class="p-intro p-ellipsis">'+ value.specifics +'</p>'
                        + '<p class="p-price">￥'+ value.price +'</p>'
                        + '<a href="javascript:;"><span class="icon-font add-goods"></span></a>'
                        + '</a></dd>'
                });
                $('#market-goods-item').html(html);
            }
        },'json');
    };

    obj.clickCurrent =function clickCurrent(){
        $('.goods-category-list li a').click(function(){
            $(this).attr("class","current");
            $(this).parent("li").siblings("li").children("a").removeClass("current");
        });
    };


    return obj;
});