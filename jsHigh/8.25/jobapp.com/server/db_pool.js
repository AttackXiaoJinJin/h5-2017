var mysql=require("mysql");
var dbconfig=require("./dbconfig");
//创建连接池
var pool=mysql.createPool(dbconfig.options);
//设置pool最大连接数(<=max)
pool.connectionLimit=20;
//pool中连接请求的最大连接数(max)
pool.queueLimit=30;
exports.pool=pool;

function handleError() {
    pool.getConnection(function (error,client) {
        if(error){
            setTimeout(function () {
                //递归再调用
                handleError();
            },3000);
            return;
        }

        //测试是否通过
        client.on("error",function () {
            handleError();
        })
    });
}

handleError();