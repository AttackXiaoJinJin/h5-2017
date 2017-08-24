//DAO数据管理层
var mysql=require("mysql");
var dbconfig=require("../dbconfig01");
var client=mysql.createConnection(dbconfig.options);
exports.user={
    getPasswdById:function (userName,callback) {
       var sql="select userPasswd from userTable where userName=?";
       client.query(sql,[userName],function (err,result) {
           console.log(sql);
           if(err){
               console.log(err.message);
               return;
           }
           if(result.length){
               callback(result[0].userPasswd);
               console.log(result[0].userPasswd);
           }else {
               callback("");
           }
           // client.end();
       });
    },
    //=========================getPasswdById

    insertNewUser:function (userNameT,userPasswdT,callback) {
        var sql="select userName from userTable where userName=?";
        client.query(sql,[userNameT],function (err,result) {
            console.log(sql);
            if(err){
                console.log(err.message);
                return;
            }
            //即用户已存在
            if(result.length){
                callback(result[0].userName);
            }else {
                addUser(userNameT,userPasswdT);
                callback("");
            }
            // client.end();
        });
    }
    //==============insertNew
};

//addUser
var addUser=function (userName,userPasswd) {
    var sql="insert into userTable(userName,userPasswd) values(?,?)";
    client.query(sql,[userName,userPasswd],function (err,result) {
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

        console.log(result);

    });
};

