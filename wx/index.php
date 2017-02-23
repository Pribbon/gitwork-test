<?php
require_once("jssdk.php");
$jssdk = new jssdk("wx9fffbe5fea5c1ec9", "f1a2f3c39011e9a308f3a7e643d71c33");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>微信JS-SDK</title>
		<meta name="viewport" content="width=device-width" />
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<style type="text/css">
			body{
				
			}
			button{
				width: 80%;
				height: 40px;
				background: green;
				color: #fff;
				border-radius: 5px;
			}
		</style>
	</head>
	<body>
		<button onclick="test()">
			点击拍照
		</button>
		<button onclick="code()">
			点击扫码
		</button>
		<img src="" id="img"/>
		<button onclick="local()">
			点击获取位置
		</button>

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
				] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
			
			function test(){
				wx.chooseImage({
				    count: 1, // 默认9,选择照片的张数
				    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				    success: function (res) {
				        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
				        img.src = localIds[0];
				    }
				});
			}
			
			
			wx.ready(function(){
				function local(){
					wx.getLocation({
					    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					    success: function (res) {
					        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
					        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
					        var speed = res.speed; // 速度，以米/每秒计
					        var accuracy = res.accuracy; // 位置精度
					        
					        wx.openLocation({
							    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
							    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
							    name: '育知同创', // 位置名
							    address: '七星创意工厂', // 地址详情说明
							    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
							    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
							});
					    }
					});
				}
			});
		</script>
	</body>
</html>

