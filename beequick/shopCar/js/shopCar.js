define(['jquery'],function($){
    var obj = {};
    var goodsInfo = {
    };


    /*减去商品*/
    obj.reduceGoods = function(){
        $('.scroll-wrap').on('click','.reduce',function () {
            var $count = $(this).siblings().text();
            var $parent = $(this).parent().parent().parent().parent();
            if($count>1){
                $count--;
            }else{
                require(["public/js/index_db.js"],function(tpl){
                    // tpl.selectData(function(result){
                });
            }
        });
    };

    /*
    * 选中商品
    */
    obj.checkProduct = function(){
        var $total = $('.summary .total em');
        var count,price;
        //单个
        $('.scroll-wrap').on('click','.checked-one',function () {
            var totalPrice = parseFloat($total.text());
            var $checkOne = $('.checked-one');
            var $checkStyle = $('.checkall-style');

            price = $(this).parent().parent().find('.p-price em').text();
            count =  $(this).parent().parent().find('.num').text();
            if($(this).hasClass('checkall-style')){
                $(this).removeClass('checkall-style');
                totalPrice -=  count * price ;
                if($checkStyle.length == 2){
                    $('.checkall').removeClass('checkall-style');
                }
            }else{
                $(this).addClass('checkall-style');
                totalPrice += count * price;
                if($checkOne.length == ($checkStyle.length+1)){
                    $('.checkall').addClass('checkall-style');
                }
            }
            $total.text(Math.abs(totalPrice.toFixed(2)));
        });

        //全选
        $('.scroll-wrap').on('click','.checkall',function(){
            totalPrice = 0;
            var $checkOne = $('.checked-one');
            for(var i = 0; i <$checkOne.length; i++){
                price = $checkOne.eq(i).parent().parent().find('.p-price em').text();
                count = $checkOne.eq(i).parent().parent().find('.num').text();
                totalPrice += price*count;
            }
            if($(this).hasClass('checkall-style')){
                $('.selected').removeClass('checkall-style');
                totalPrice = 0;
            }else{
                $('.selected').addClass('checkall-style');
            }
            console.log(price);
            console.log(count);
            $total.text(totalPrice);
        });

        //判断是否选好了
        $('.scroll-wrap').on('click','.selected',function(){
            if(Boolean($(".checkall-style")[0])){
                $('.subBtn').css("backgroundColor",'#ffd600').html('选好了');
            }else{
                $('.subBtn').css("backgroundColor",'#808080').html('满￥0起送');
            }
        });
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
                            <span class="selected checked-one"></span>
                        </div>
                        <div class="goods-info">
                            <a class="p-pic" href="javascript:;"><img src="${data.img}"></a>
                            <a class="p-intro" href="javascript:;">
                                <p class="p-title">${data.title}</p>
                                <p class="p-price">￥<em>${data.price}</em></p>
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