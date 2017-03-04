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
           var list = '';
           $.each(data,function(key,value){
               list += '<li> <a href="'+value.activity.linkurl+'"> <div class="icon-reward">' +
                   '<img src="'+value.activity.img+'"></div> <p class="title">' +
                   ''+value.activity.name+'</p> </a></li>';
           });
           $('#beequik-menu-list').html(list);
       },'json');

       /*
       * 加载热售商品数据
       */
       $.get("public/json/hot_sale.json",function(result,status,xhr){
            var data = result.data;
            var li = '';
            $.each(data,function(key,value){
                //运用ES6的字符串模板
                //当存在json对象属性有些有值，有些没有的时候，则给其元素一个属性data-num="${value.pm_desc.length}
                //当data-num = '0';时，则设置其元素为display:none;
                li += `
                     <li>
                        <div class="img">
                            <a href="javascript:;">
                                 <img src="${value.img}" alt="">
                             </a>
                        </div>
                         <p class="describe">${value.name}</p>
                         <div class="feature">
                             <p class="select">精选</p>
                             <p class="send" data-num="${value.pm_desc.length}"> ${value.pm_desc}</p>
                         </div>
                         <div class="quality">
                            ${value.specifics}
                         </div>
                         <div class="price">
                             <span class="sale-cost">${value.price}</span>
                             <span class="prime-cost">${value.market_price}</span>
                             <a href="#addCar" class="add-car-fly"><span class="operate"></span></a>
                         </div>
                     </li>
                `;

            });
            $("#market-goods-item").html(li);
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




    /*
    * 扫二维码
    */
    function scanCode(){
        let $scan = $("#scan");
        $scan.click(function () {
            localStorage.getItem("scanCode");
            console.log(localStorage.getItem("scanCode"));
        });
    }
    scanCode();



    return obj;
});
