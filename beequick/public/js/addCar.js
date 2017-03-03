define(['jquery','fly'],function($,fly){
        var obj = {};

        obj.request = function(){
            var offset = $("#icon-shopCar").offset();

            $("#market-goods-item").on("click",".add-car-fly",function(event){
                var addcar = $(this);
                //find() 方法获得当前元素集合中每个元素的后代。
                var img = addcar.parent().parent().find('img').attr('src');
                console.log(addcar.parent().parent()[0]);
                console.log(img);
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

