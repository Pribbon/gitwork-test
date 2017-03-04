define(['jquery'],function($){
    var obj = {};
    obj.click = function(){
        // $("script[src='./public/js/addCar.js']").remove();
        $('#footer-home').on("click",function(){
                clearImg();
                $('#footer-home #icon-home').attr("class","icon-home2");
        });
        $('#footer-market').on("click",function(){
                clearImg();
                $('#footer-market #icon-market').attr("class","icon-market2");
        });
        $('#footer-order').on("click",function(){
                clearImg();
                $('#footer-order #icon-order').attr("class","icon-order2");
        });
        $('#footer-shopCar').on("click",function(){
                clearImg();
                $('#footer-shopCar #icon-shopCar').attr("class","icon-shopCar2");
        });
        $('#footer-person').on("click",function(){
                clearImg();
                $('#footer-person #icon-person').attr("class","icon-person2");
        });
    };
    function clearImg(){
        $('#footer-home #icon-home').attr("class","icon-home");
        $('#footer-market #icon-market').attr("class","icon-market");
        $('#footer-order #icon-order').attr("class","icon-order");
        $('#footer-shopCar  #icon-shopCar').attr("class","icon-shopCar");
        $('#footer-person #icon-person').attr("class","icon-person");
    }
    obj.click();

    obj.addCar = function(){
        require(['public/js/addCar'],function(res){
            res.request();
        })
    };

    return obj;
});
