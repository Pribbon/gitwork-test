/*新鲜预订*/
define(['jquery'],function($){
    var obj = {}
    /*<li class="fruits-item">
     <a class="p-pic" href="javascript:;"><img src="./img/QQ截图20170228174511.png"></a>
     <a href="javascript:;"><p class="p-intro">[次日达]禧美阿拉斯加狭鳕片500g</p></a>
     <p class="p-price">￥<em>28</em></p>
     <a class="addCar" href="javascript:;"><span class="icon-font"></span></a>
     </li>*/
    /*加载新鲜预订商品数据*/
    obj.request = function(){
        $.ajax({
            type: 'get',
            url: 'http://h5.yztctech.net/api/axf/apiyuding.php',
            async: true,
            success: function(result,status,xhr){
                var data = JSON.parse(result).product;
                var html = '';
                $.each(data,function(key,value){
                    html += '<li class="fruits-item">'
                        + '<a class="p-pic" href="javascript:;"><img src="'+ value.img +'"></a>'
                        + '<a href="javascript:;"><p class="p-intro">'+ value.name +'</p></a>'
                        + '<p class="p-price">￥<em>'+ value.price +'</em></p>'
                        + '<a class="addCar" href="javascript:;"><span class="icon-font"></span></a></li>'
                });
                $("#fruits-list").html(html);
            }
        },'json');
    }

    return obj;
});
