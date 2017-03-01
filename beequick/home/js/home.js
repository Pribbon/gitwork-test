//主页轮播图
define(['jquery','swiper'],function($,swiper){
    var obj = {};
    obj.request = function(){
        /*
        * 加载轮播图数据
        */
        $.ajax({
            type:'get',
            url:'public/json/home_banner_menu.json',
            async:true,
            dataType:'json',
            timeout:'3000',
            context:$('#swiper-wrapper-banner'),
            success:function(result){
                var swiperWrapper = this;//指上面的context
                var data = result.data.slide;
                $.each(data,function(key,value){
                    if(value){
                        var slider = '<li class="swiper-slide">'+
                            '<img src="'+value.activity.img +'"></li>';
                        swiperWrapper.append(slider);
                    }
                });
                //调用轮播
                swiperBanner();
            },error: function(xhr, type){
                alert('Ajax error!');
            }
        });

        /*
        * 加载menu数据
        */
       $.get('public/json/home_banner_menu.json',function(result,status,xhr){
           var data = result.data.menu;
           $.each(data,function(key,value){
               //加载图片
                var img = '<img src="'+value.activity.img +'">';
                $('.beequik-menu-list-reward').eq(key).append(img);
                //加载name
                var name = value.activity.name;
                $('.beequik-menu-list-title').eq(key).append(name)
           });
       },'json');

       /*
       * 加载热售商品数据
       */
       $.get("json/hot_sale.json",function(result,status,xhr){
            var data = result.data;
            $.each(data,function(key,value){

            });
       },"json");
    }

    //轮播图的swiper
    function swiperBanner(){
        var swiper = new Swiper("#swiper-beequick-banner",{
            direction:'horizontal',
            loop:'true',
            autoplay:4000,
            //修改swiper自己或子元素时，自动初始化swiper
            observer: true,
            observeParents: true,
        });
    }

    return obj;
});
