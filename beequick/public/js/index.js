define(['jquery'],function($){
    var obj = {
    };
    obj.click = function(){
        $(".footer-click").on("click",function(event){
           $(".footer-click").find("div:first-child").removeClass("img-active1");
           $(".footer-click").find("div:first-child").attr("class","img-active");
           $(this).find("div:first-child").attr("class","img-active1");
        });
    }
   obj.click();



    /*购物车飞入功能*/
    obj.addCar = function(){
        require(['public/js/addCar'],function(res){
            res.request();
        })
    };

    /*
    * 加入购物车
    */
    obj.addDataBase = function(){
        $("#market-goods-item").on("click",".add-car-fly",function(event){
            var flag = true;
            var addCar = $(this);
            var pId = addCar.parent().parent().parent().attr("id");
            var title = addCar.parent().parent().parent().find('.describe').text();
            var price = addCar.parent().parent().parent().find('.sale-cost').text();
            var count = 1;
            var img = addCar.parent().parent().parent().find('img').attr('src');
            var flag = true;

            //调用数据库
            require(["./public/js/index_db"],function(tpl){
                tpl.selectData(function(result){
                     if(result.length == 0){
                         tpl.inserData(pId,title,price,count,img);
                     }
                    $.each(result,function(key,data){
                       if(pId == data.id){
                           ++data.count;
                           tpl.updataInfo(pId,data.count);
                           flag = false;
                           return;
                       }
                   });
                     if(flag){
                         tpl.inserData(pId,title,price,count,img);
                     }
                    flag = true;
                });
            });
        });
    };

    return obj;
});
