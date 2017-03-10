var app = angular.module('dooshiApp',['ngRoute','angularCSS']);

/*$routeProvider 是用来配置路由的*/
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/encyclopedias',{
        templateUrl: './encyclopedias/encyclopedias.html',
        css: './encyclopedias/css/encyclopedias.css',
        // controller: 'encyclopediasCtrl'
    })
    .when('/home',{
        templateUrl: './home/home.html',
        css: './home/css/home.css',
        // controller: 'homeCtrl'
    })
    .when('/find',{
        templateUrl:'./find/find.html',
        css: './find/css/find.css',
        // controller: 'findCtrl'
    })
    .when('/community',{
        templateUrl: './community/community.html',
        css: './community/css/community.css',
        // controller: 'communityCtrl'
    })
    /*默认跳转页面 一打开index.html页面就会跳转到page锚点页面*/
    .otherwise('/home')

}]);
    
