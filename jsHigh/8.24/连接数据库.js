var mysql = require("mysql");
var dbconfig = require("./dbconfig");

//连通数据库,打开数据库连接
var client = mysql.createConnection(dbconfig.options);
// client.query("select * from students where stuId=? and id=?",[id],function (err,result,fields) {
client.query("select * from students where stuId=1", function (err, result, fields) {
    if (err) {
        console.log(err.message);
        return;
    }

    if (result.length) {
        console.log(result);
    }

    client.end();
});

//通过id获取密码，封装成一个方法
var getPasswdById=function (id) {
    //会异步执行
    client.query("select passwd from students where stuId?",[id],function (err,result,fields) {
        if(err){
            console.log(err.message);
            return;
        }
        try{
            if(result.length){
                console.log(result[0].userPasswd);
            }
        }
        catch(e) {
            console.log(e.message);
        }finally {
            //关闭数据库连接
            client.end();
        }

        console.log(result);

    });
};

getPasswdById("1");

var orderPostion=function (condition,flag) {
    var order_rule=flag?'asc':'desc';
    //会异步执行
    //传来的字段,添加[mysql.escapeId(condition)]
    // client.query("select * from posotion order by "+mysql.escapeId(condition)+" "+order_rule,function (err,result,fields) {
    var sql="select * from posotion order by ?? "+order_rule;
    client.query(sql+[condition],function (err,result,fields) {
        if(err){
            console.log(err.message);
            return;
        }
        try{
            if(result.length){
                for(var i=0;i<result.length;i++){
                    console.log(result[i].public_date);
                }

            }
        }
        catch(e) {
            console.log(e.message);
        }finally {
            //关闭数据库连接
            client.end();
        }

        console.log(result);

    });
};

orderPostion("publish_date");

var updateCity=function (cityId,id) {
    var sql="update user set cityId = ? where id=?";
    client.query(sql,[cityId,id],function (err,result,fields) {
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
            client.end();
        }

        console.log(result);

    });
};
updateCity("2","81");

//addUser
var addUser=function (phone,passwd,email,cityId) {
    var sql="insert into user(phone,passwd,email,city_id) values (?,?,?,?)";
    client.query(sql,[phone,passwd,email,cityId],function (err,result,fields) {
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
            client.end();
        }

        console.log(result);

    });
};
addUser('123','1234','zz@163.com','88');


