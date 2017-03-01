/*主页疯狂秒杀*/
define(["jquery"],function(){
    var obj = {};
    obj.request = function(){
        /*加载疯狂秒杀-商品列表*/
        $.get('http://h5.yztctech.net/api/axf/apimiaosha.php',function(result,status,xhr){
            console.log(result);
        });
    }
});
