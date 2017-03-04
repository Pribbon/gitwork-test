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
            var addCar = $(this);
            var id = addCar.parent().parent().attr("id");
            var title = addCar.parent().parent().find('.describe').text();
            var price = addCar.parent().parent().find('.sale-cost').text();
            var count = 1;
            var img = addCar.parent().parent().find('img').attr('src');

            //调用数据库
            require(["./public/js/index_db"],function(tpl){
                tpl.inserData(id,title,price,count,img);
               /* tpl.selectData(function(data){
                    if(id === data.id){
                        ++data.count;
                        tpl.updataInfo(data.id,data.count);
                    }else{
                       tpl.inserData(id,title,price,count,img);
                    }
                });*/

            });
        });
    };

    return obj;
});
