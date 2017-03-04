/*闪送超市*/
define(['jquery',],function($){
    var obj = {};
    obj.getData = `http://h5.yztctech.net/api/axf/apicategory.php?category=${encodeURIComponent('热销榜')}`;
    var isloaded = false;

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
                    html += '<dd class="goods-items"><a href="javascript:;">'
                        + '<img class="product-image" src="public/img/loading.gif"  data-src="' + value.img + '">'
                        + '<p class="p-title p-ellipsis">' + value.name + '</p>'
                        + '<p class="tag"><span class="p-tag selection">精选</span>'
                        + '<span class="p-tag gift">' + value.pm_desc + '</span></p>'
                        + '<p class="p-intro p-ellipsis">' + value.specifics + '</p>'
                        + '<p class="p-price">￥' + value.price + '</p>'
                        + '<a href="javascript:;"><span class="icon-font add-goods"></span></a>'
                        + '</a></dd>'
                });
                $('#market-goods-item').html(html);
            },
            complete: function () {
                //obj.lazyImg();  //PC端图片懒加载
            }
        }, 'json');
    };

    /*给当前选中的li添加样式*/
    obj.clickCurrent =function(){
        $('.goods-category-list li a').click(function(){
            $(this).attr("class","current");
            $(this).parent("li").siblings("li").children("a").removeClass("current");
        });
    };
    
    /*判断图片是否在可视区域内*/
    function isShow ($el) {
        var winH = $("#market-goods-item").height(), //获取窗口高度
            scrollH = $("#market-goods-item").scrollTop(), //获取窗口滚动高度
            top = $el.offset().top; //获取元素距离窗口顶部偏移高度
        if(top < scrollH + winH){
            return true; //在可视范围
        }else{
            return false; //不在可视范围
        }
    };

    /*监听窗口滚动事件,检查元素是否在可视范围内*/
    $("#market-goods-item").on('scroll',function(){
        checkShow();
    });
    checkShow();
    function checkShow(){ //检查元素是否在可视范围内
        $('img').each(function () { //遍历每一个元素
            var $cur = $(this);
            if(!!isloaded($cur)){return;} //判断是否已加载
            if(isShow($cur)){
                setTimeout(function () {
                    showImg($cur);
                },300); //设置时间是为了更好的看出效果
            };
        });
    };

    function isloaded($el){
        return $el.attr("isloaded");
    }

    /*元素显示的时候把之前的默认照片替换成data-src里的照片*/
    function showImg($el) {
        $el.attr('src',$el.atrr('data-src'));
        // $cur.data('isloaded',true);
    }


    return obj;
});
/*//PC端图片懒加载
 obj.lazyImg = function() {
 $('.product-image').lazyload({
 placeholder: "public/img/loading.gif",
 effect: "fadeIn",
 threshold:200,
 // container : "#market-goods-item"
 });
 };*/