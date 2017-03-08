/*闪送超市*/
define(['jquery','public/js/lazyLoad'],function($,lazy){
    var obj = {};
    obj.getData = `http://h5.yztctech.net/api/axf/apicategory.php?category=${encodeURIComponent('热销榜')}`;

    /*解析当前目标,拼接到url后面的参数中*/
    obj.getUrl = function(){
        $('.goods-category-list li a').click(function(e){
            let urlStr =  e.target.textContent;
            obj.getData = `http://h5.yztctech.net/api/axf/apicategory.php?category=${urlStr}`;
            obj.request(obj.getData);
        });
    };

    /*加载闪送超市商品数据*/
    obj.request = function(date) {
        $.ajax({
            type: 'get',
            url: obj.getData,
            async: true,
            dataType: 'json',
            success: function (result, status, xhr) {
                var data = result.data;
                var html = '';
                $.each(data, function (key, value) {
                    html += '<dd class="goods-items" id="'+value.id+'"><a href="javascript:;">'
                        + '<img class="product-image" src="'+ value.img +'"></a>'
                        + '<p class="describe p-ellipsis">'+ value.name +'</p>'
                    html += '<dd class="goods-items"><a href="javascript:;">'
                        + '<img class="product-image" src="./public/img/loading.gif" data-src="'+ value.img +'"></a>'
                        + '<p class="p-title p-ellipsis">'+ value.name +'</p>'
                        + '<p class="tag"><span class="p-tag selection">精选</span>'
                        + '<span class="p-tag gift">'+ value.pm_desc +'</span></p>'
                        + '<div class="market-operater-wrap"><p class="p-intro p-ellipsis">'+ value.specifics +'</p>'
                        + '<p class="sale-cost">￥<span>'+value.price +'</span></p>'
                        + '<div class="market-operater"><span class="icon-font "></span>'
                        +' <span class="goods-amount"></span> <a href="#addCar" class="add-car-fly">'
                        + '<span class="icon-font add-goods"></span></a> </div></div>'
                        + '</dd>'
                });
                $('#market-goods-item').html(html);
            },
            complete: function () {
                $(".goods-list").scroll( function(){//监听滚动事件
                    lazy.lazyImg();  //PC端图片懒加载
                });
            }
        }, 'json');
    };
    console.log($(".goods-list"));
    console.log($(".goods-list").scrollTop());
    $(".goods-list").on('scroll', function(){//监听滚动事件
        lazy.lazyImg();  //PC端图片懒加载
    });
    /*给当前选中的li添加样式*/
    obj.clickCurrent =function(){
        $('.goods-category-list li a').click(function(){
            $(this).attr("class","current");
            $(this).parent("li").siblings("li").children("a").removeClass("current");
        });
    };
    
    return obj;
});