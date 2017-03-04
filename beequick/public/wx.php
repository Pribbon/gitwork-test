<?php
require_once("../home/jssdk.php");
$jssdk = new jssdk("wx9fffbe5fea5c1ec9", "f1a2f3c39011e9a308f3a7e643d71c33");
$signPackage = $jssdk->GetSignPackage();
?>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

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

    wx.ready(function(){
        var wxObj = {};
        //点击扫码
        wxObj.scanCode = function(){
            wx.scanQRCode({
                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                }
            });
        }

        wxObj.scanCode();

        localStorage.setItem("wxObj",JSON.stringify(wxObj));
        /*alert(JSON.stringify(wxObj));*/
    });




    /*在ready(function(){});中写的方法要用id获取绑定onclick方法的形式,不能用function local()的方法,
     * 因为在ready(function(){});中local是局部变量,在div中调用local()是调用不到的.*/
    /*wx.ready(function(){ //相当于js中的window.onload=function(){}	方法,也跟ready(function(){});一样,要用id绑定onclick方法

    });*/
</script>

