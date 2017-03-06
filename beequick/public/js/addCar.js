define(['jquery','fly'],function($,fly){
        var obj = {};

        obj.request = function(){
            //获取购物车元素
            var offset = $("#icon-shopCar").offset();

            $("#market-goods-item").on("click",".add-car-fly",function(event){
                var addcar = $(this);
                //获取图片
                var img = addcar.parent().parent().parent().find('img').attr('src');
                var flyer = $('<img class="u-flyer" src="'+img+'">');
                flyer.fly({
                    start: {
                        left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                        top: event.pageY //开始位置（必填）
                    },
                    end: {
                        left: offset.left+10, //结束位置（必填）
                        top: offset.top+10, //结束位置（必填）
                        width: 0, //结束时宽度
                        height: 0 //结束时高度
                    }
                });
            });
        }
        return obj;
});

