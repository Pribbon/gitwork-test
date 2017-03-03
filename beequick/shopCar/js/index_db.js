define(['jquery'],function($){
    var dbInfo = {
        dbName: "ShoppingCartDB", // 数据库名称
        dbVersion: 1, // 数据库版本
        db: null
    };
    // 获取indexedDB，因为内核不同，需要加上前缀
    var indexedDB = window.indexedDB || window.webkitIndexedDB
        || window.mozIndexedDB || window.msIndexedDB;
    
});
