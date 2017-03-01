//主页轮播图
define(['jquery'],function($){
    var obj = {};
    obj.request = function(){
        $.ajax({
            type:'get',
            url:'public/json/home_banner_menu.json',
            async:true,
            dataType:'json',
            timeout:'3000',
            context:$('.swiper-wrapper-banner'),
            success:function(result){
                var swiperWrapper = this;
                var data = result.data.slide;
                $.each(data,function(key,value){
                    if(value){
                        var slider = '<li class="swiper-slide">'+
                            '<img src="'+value.activity.img +'"></li>';
                        swiperWrapper.append(slider);
                    }
                });

                var swiper = new Swiper(".swiper-container-horizontal",{
                    direction:'horizontal',
                    loop:'true',
                    autoplay:4000,
                    //修改swiper自己或子元素时，自动初始化swiper
                    observer: true,
                    observeParents: true,
                });
            },error: function(xhr, type){
                alert('Ajax error!');
            }
        });

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
       $.get("json/hot_sale.json",function(result,status,xhr){
            var data = result.data;
            $.each(data,function(key,value){

            });
       },"json");
    }
    return obj;
});
