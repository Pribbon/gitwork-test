define(['jquery'],function($){

    var dbInfo = {
        dbName: "ShoppingCarDB", // 数据库名称
        dbVersion: 1, // 数据库版本
        db: null
    };
    // 获取indexedDB，因为内核不同，需要加上前缀
    var indexedDB = window.indexedDB || window.webkitIndexedDB
        || window.mozIndexedDB || window.msIndexedDB;

    // 添加数据库
    function createOrOpenDataBase()
    {
        // 创建和打开数据库
        // IDBOpenDBRequest - 返回结果,异步操作，需要通过回调来获取到真正的数据库对象
        var request = indexedDB.open(dbInfo.dbName,dbInfo.dbVersion);
        // 成功创建监听
        request.onsuccess = function (event) {
            // 请求的响应是一个 IDBDatabase对象，这就是IndexedDB对象
            dbInfo.db = event.target.result;
            console.log("创建数据库成功...");
        };
        // 创建失败
        request.onerror = function (event) {

        };
        // 更新,这个方法，在onsuccess之前调用
        request.onupgradeneeded = function (event) {
            // 创建表操作，修改表的操作都必须放在这个回调方法中
            createObjectStore(event);
        };
    }
    /**
     * 创建ObjectStore
     * @param event
     */
    function createObjectStore(event)
    {
        // 判断数据库中是否有对应ObjectStore,如果有则删除
        // 先获取数据库对象
        var db = event.currentTarget.result;
        // 判断是否存在名称为ShoppingCat的ObjectStore
        if (db.objectStoreNames.contains("ShoppingCar"))
        {
            db.deleteObjectStore("ShoppingCar");
        }
        // 创建ShoppingCart这个ObjectStore，并且指定键值
        var shoppingCartStore =
            db.createObjectStore("ShoppingCar",{keyPath: "id"})

    };


    //插入数据
    function insertData(id,title,price,count,img) {
        if (!dbInfo.db)
        {
            console.log("return");
            return;
        }
        // 获取事务，默认事务是只读的，
        var trans = dbInfo.db.transaction(["ShoppingCar"],"readwrite");
        // 获取到ObjectStore
        var store = trans.objectStore("ShoppingCar");

        var product = {
            id:id,
            title:title,
            price:price,
            count:count,
            img:img
        };
        var request = store.put(product);
        request.onsuccess = function(event){
            console.log("插入数据成功...");
        };
        request.onerror = function (event) {
            console.log("插入数据失败...");
        };
    };

    // 查询数据
    function selectData(fn){
        var trans = dbInfo.db.transaction(["ShoppingCar"],"readwrite");
        var store = trans.objectStore("ShoppingCar");
        var request= store.openCursor();

        request.onsuccess = function(event){
            var cursor = event.target.result;
            fn(cursor.value);
            //保持继续前行查找，直到已经到达数据的末尾
            cursor.continue();
        }
    };
    /*
    * 修改数据
    */
    function updataData(pId,pCount) {
        if (!dbInfo.db)
        {
            return;
        }
        var trans = dbInfo.db.transaction(["ShoppingCar"],"readwrite");
        var store = trans.objectStore("ShoppingCar");

        // get方法中传递的参数就是这个键值
        var request = store.get(pId);

        request.onsuccess = function (event) {
            var product = event.target.result;
            console.log( product.count);
            console.log( pId);
            product.count = pCount;
            console.log( product.count);
            store.put(product).onsuccess = function (event) {
                console.log("修改成功....")
            }
        }
        // 148706457570713
    }



    /*
    * 提供数据库接口
    */

    var obj = {};
    //创建数据库接口
    obj.createDataBase = function(){
        createOrOpenDataBase();
    };
    //提供插入数据接口
    obj.inserData = function(id,title,price,count,img){
        // console.log(id);
        insertData(id,title,price,count,img);
    };

    //提供查询接口
    obj.selectData = function(fn){
        return selectData(fn);
    };
    //提供修改接口
    obj.updataInfo = function(pId,pCount){
        updataData(pId,pCount);
    };
    return obj;
});
