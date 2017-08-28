//DAO数据管理层
var mysql=require("mysql");
var dbconfig=require("../dbconfig");
//数据库的连接有一定的限制
var client=mysql.createConnection(dbconfig.options);
var userSql=require("../dao/user_sql").sql;

exports.userDao={
    getPasswdByPhone:function (userPhone,callback) {
        client.query(userSql.getPasswdByPhone,[userPhone],function (err,result) {
            //console.log(sql);
            if(err){
                console.log(err.message+" from getPasswdById");
                callback("e004");
                return;
            }
            callback(result);
            client.end();
        });
    },
    //=========================getPasswdById,login
    regist:function (userPhone,userPasswd,callback) {
        //userDao对象
        // this.getPasswdByPhone(userSql.getPasswdByPhone,[userPhone],function (result) {
        client.query(userSql.getPasswdByPhone,[userPhone],function (err,resultC) {
            //console.log(resultC.length);
           if(resultC.length==0){
               client.query(userSql.addUser,[userPhone,userPhone,userPasswd],function (err,result) {
                   // console.log(sql);
                   if(err){
                       console.log(err.message);
                       return;
                   }
                   callback(result.affectedRows);

               });
           } else{
               callback("5");
            }

            client.end();
        });

    }
    //==============insertNew
};


/*
var addUser=function (userPhone,userName,userPasswd) {
    client.query(userSql.addUser,[userPhone,userName,userPasswd],function (err,result) {
        if(err){
            console.log(err.message);
            return;
        }
        try{
            console.log(result.affectedRows);
        }
        catch(e) {
            console.log(e.message);
        }finally {
            //关闭数据库连接
            //  client.end();
        }
        // console.log(result);
    });
};*/

