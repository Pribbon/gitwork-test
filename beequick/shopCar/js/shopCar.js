define(['jquery'],function($){
    var obj = {};
    var goodsInfo = {
        img : '',
        name : '',
        price : '',
        num : 1,
        status : false
    };



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
        /*$(".reduce").click(function () {
            var goods = obj.getGoodsInfo();
            var number = goods.num;
            console.log(number);

        });*/
    };

    /*
    * 选中商品
    */
    obj.checkProduct = function(){

    };

    /*
    *查询数据库，获取商品
    */
    obj.addDataBase = function(){
        require(['public/js/index_db'],function(tpl){
            var proList = '';
            $box = $('.carContent');
            tpl.selectData(function(result){
                // console.log(result);
                $.each(result,function(key,data){
                    proList = `
                    <div class="car-goods-item">
                        <div class="checkbox">
                        <span>
                            <input class="input_check" type="checkbox" id="check3">
                            <label for="check3"></label>
                        </span>
                        </div>
                        <div class="goods-info">
                            <a class="p-pic" href="javascript:;"><img src="${data.img}"></a>
                            <a class="p-intro" href="javascript:;">
                                <p class="p-title">${data.title}</p>
                                <p class="p-price"><em>${data.price}</em></p>
                                <p class="btns">
                                    <span class="icon-font reduce"></span>
                                    <span class="num">${data.count}</span>
                                    <span class="icon-font add"></span>
                                </p>
                            </a>
                        </div>
                    </div>
                `;
                    $box.append(proList);
                });

            });
        });
    };
    return obj;
});