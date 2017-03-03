define(['jquery'],function($){
    var obj = {};
    var goodsInfo = {
        img : '',
        name : '',
        price : '',
        num : 1,
        status : false
    };

    /*初始化商品信息*/


    /*获取商品信息*/
    obj.getGoodsInfo = function(){
        $(".car-goods-item").click(function (e) {
            goodsInfo.img = $(this).children(".goods-info").children(".p-pic").children("img")[0].src;
            goodsInfo.name = $(this).children(".goods-info").children(".p-intro").children(".p-title")[0].textContent;
            goodsInfo.price = $(this).children(".goods-info").children(".p-intro").children(".p-price").children("em")[0].textContent;
            goodsInfo.num = $(this).children(".goods-info").children(".p-intro").children(".btns").children(".num")[0].textContent;

            goodsInfo.status = $(this).children(".checkbox").children("span").children(".input_check")[0].checked;
        });
        return goodsInfo;
    };

    /*减去商品*/
    obj.reduceGoods = function(){
        $(".reduce").click(function () {
            var goods = obj.getGoodsInfo();
            var number = goods.num;
            console.log(number);

        });
    }

    return obj;
});