var mysql=require("mysql");
var options={
    host:"localhost",
    port:"3305",
    //数据库
    database:"user01",
    user:"root",
    password:'123456'

};
//创建连接池
var pool=mysql.createPool(options);
//设置pool最大连接数(<=max)
pool.connectionLimit=20;
//pool中连接请求的最大连接数(max)
pool.queueLimit=30;

pool.getConnection(function (error,result) {
    if(error){
        return;
    }
    //开始事务
    client.beginTransaction(function (err) {
        if(err){
            return;
        }
        client.query("delete from userTable where id=1",function (error,result) {
            if(error){
                return;
            }
            //删除成功
            if(result.affectedRows==1){
                client.query("delete from position where id=2",function (error,result) {
                    //异常回滚
                    if(error){
                    //    回滚,但回滚可能会出错(服务器断电)
                        try{
                            client.rollback();
                        }catch (e){

                        }finally {

                        }
                        return;
                    }
                    //删除成功
                    if(result.affectedRows==1){
                        client.submit();
                    }
                    //事务失败回滚
                    else{
                        client.rollback();
                    }
                })
            }
        })

    })//========开始事务
});//===========getConnection









