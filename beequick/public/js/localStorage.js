define(['jquery'],function($){
    if(!window.localStorage){
        return ;
    }
    var obj = {};

    /*
    * 添加到本地存储
    */
    obj.inserInfo = function(){
        $("#market-goods-item").on("click",".add-car-fly",function(event) {
            var addCar = $(this);
            var pId = addCar.parent().parent().attr("id");
            var title = addCar.parent().parent().find('.describe').text();
            var price = addCar.parent().parent().find('.sale-cost').text();
            var count = 1;
            var img = addCar.parent().parent().find('img').attr('src');

            var productObj = {
                pId:pId,
                title:title,
                price:price,
                count:count,
                img:img
            };

            // 转换为字符串
            var productJSONStr = JSON.stringify(productObj);
            //将产品对象存入本地存储
            window.localStorage.setItem(pId,productJSONStr);
            console.log("所有key"+window.localStorage.key(0));
        });
    }
    return obj;
});
