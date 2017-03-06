define(['jquery'],function ($) {
    var obj = {};


    /*监听窗口滚动事件,检查元素是否在可视范围内*/
    obj.lazyImg = function (){
        checkShow();
    };

    /*checkShow();*/

    /*判断元素是否在可视范围*/
    function checkShow(){//检查元素是否在可视范围内
        $('img').each(function(){//遍历每一个元素
            var $cur = $(this);
            if(!!isloaded($cur)){return;}//判断是否已加载
            if (isShow($cur)) {
                showImg($cur);
            }else{
                return;
            };
        });
    };

    /*判断图片是否被加载*/
    function isloaded($el){
        var flag = $el.attr('data-isloaded');
        if(flag){
            return true;
        }else{
            return false;
        }
    }

    /*判断图片是否在可视区域内*/
    function isShow($el){
        var winH = $(".goods-list").height(),//获取窗口高度
            scrollH = $(".goods-list").scrollTop(),//获取窗口滚动高度
            top = $el.offset().top;//获取元素距离窗口顶部偏移高度
        console.log('图片高度:'+top,'滚动高度:'+(scrollH+winH));
        if(top < winH - 300){
            return true;//在可视范围
        }else{
            return false;//不在可视范围
        }
    }

    /*元素显示的时候把之前的默认照片替换成data-src里的照片*/
    function showImg($el){
        $el.attr('src', $el.attr('data-src'));
        $el.attr('data-isloaded',true);  //给img中添加一个自定义属性
    }

    return obj;
});