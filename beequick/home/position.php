<?php
require_once("jssdk.php");
$jssdk = new jssdk("wx9fffbe5fea5c1ec9", "f1a2f3c39011e9a308f3a7e643d71c33");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定位</title>
    <meta http-equiv="refresh" content="5;url=../index.html"> 
    <link rel="stylesheet" href="../public/css/reset.css">
    <script charset="utf-8" src="http://api.map.baidu.com/api?v=2.0&ak=7ddQqdOKgdhyfZ6DOm7AQdpUHsW2uvQE"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <style type="text/css">
        body{
            background-color: #FFD82B;
            overflow: hidden;
            border: 1px solid transparent;
        }
        .position{
            position: relative;
            width:6.547rem;
            height: 6.547rem;
            margin:  3.719rem auto 0;
        }
        .position .position-logo{
            width: 6.547rem;
            height: 3.281rem;
            background: url("./img/boot_logo-88fb0b99.png") no-repeat center center;
            background-size: contain;
            /*margin:  3.719rem auto 0;*/
            position: absolute;
        }
        .position .position-loading{
            width: 1.172rem;
            height: 1.172rem;
            background: url("./img/boot_gps-5f778fd8.png") no-repeat center center;
            background-size: contain;
            /*margin: 1rem auto 0;*/
            position: absolute;
            bottom: 1.3rem;
            left: 2.688rem;
        }
        .position p{
            color: #333;
            position: absolute;
            bottom: .7rem;
            left: 2.617rem;
            font-size: 0.438rem;
        }
    </style>
</head>
<body>
<div class="position">
    <div class="position-logo"></div>
    <div class="position-loading"></div>
    <p>定位中</p>
</div>
</body>
<script type="text/javascript">
    wx.config({
        debug: true, // 开启调试功能，如果为true每进行一次操作都会弹出
        appId: '<?php echo $signPackage["appId"];?>', // 必填，公众号的唯一标识(字符串)
        timestamp: <?php echo $signPackage["timestamp"];?>, // 必填，生成签名的时间戳(数字)
        nonceStr: '<?php echo $signPackage["nonceStr"];?>', // 必填，生成签名的随机串(字符串)
        signature: '<?php echo $signPackage["signature"];?>',// 必填，签名，见附录1(字符串)
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'onVoicePlayEnd',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ]
    });

	wx.ready(function(){
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                console.log(latitude+longitude);

	            var arr = gcj02tobd09(longitude,latitude);
	            latitude = arr[1];
	            longitude = arr[0];
	            get_address(latitude,longitude);
	            setTimeout(
						function (){
							//页面跳转
							window.location = '../index.html';	
						}, 1000);
	            console.log("latitude:"+latitude+" "+"longitude:"+longitude);
            }
        });
	});
	
	//bd09(百度)坐标转换具体地址函数
	function get_address(lat,lng) {
   		var point = new BMap.Point(lng,lat);
		var geoc = new BMap.Geocoder();    
		geoc.getLocation(point, function(rs){
			var addComp = rs.addressComponents;
			var o = {
				province:addComp.province,
				city:addComp.city,
				district:addComp.district,
				street:addComp.street,
				streetNumber:addComp.streetNumber
			}
			//把 obj 转换成 str
			var address = JSON.stringify(o);
			//位置信息存储到本地(localStorage)，后面的页面调用；
			localStorage.address = address;
		});  
	};
	//定义一些常量
	var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
	var PI = 3.1415926535897932384626;
	var a = 6378245.0;
	var ee = 0.00669342162296594323;
	/**
	 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
	 * 即谷歌、高德 转 百度
	 */
	function gcj02tobd09(lng, lat) {
	    var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
	    var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
	    var bd_lng = z * Math.cos(theta) + 0.0065;
	    var bd_lat = z * Math.sin(theta) + 0.006;
	    return [bd_lng, bd_lat]
	}
	
</script>
<script type="text/javascript" src="../public/lib/flexible.js"></script>
</html>