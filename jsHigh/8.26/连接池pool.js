var mysql=require("mysql")
var options={
    host:"localhost",
    port:"3305",
    //数据库
    database:"user01",
    user:"root",
    password:'123456'

};
// exports.options=options;

// var client= mysql.createConnection(options);
//创建连接池
var pool=mysql.createPool(options);
//client即connection
pool.getConnection(function (error,client) {
    client.query('select * from userTable',function (err,result) {
        if(err){
            return;
        }
        console.log(result);
        //替代client.end()
        client.release();
    })
});
pool.getConnection(function (error,client) {
    client.query('select * from collectTable',function (err,result) {
        if(err){
            return;
        }
        console.log(result);
        //替代client.end()
        client.release();
    })
});
//设置pool最大连接数(<=max)
pool.connectionLimit=20;
//pool中连接请求的最大连接数(max)
pool.queueLimit=30;





