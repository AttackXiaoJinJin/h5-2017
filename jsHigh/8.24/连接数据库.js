var mysql=require("mysql");
var dbconfig=require("./dbconfig");
// var dbconfig=require("dbconfig");
/*
var options={host:"localhost",
    port:"3305",
    database:"db01",
    user:"root",
    password:'123456'
};*/
//连通数据库
var client=mysql.createConnection(dbconfig.options);
// client.query("select * from students where stuId=? and id=?",[id],function (err,result,fields) {
client.query("select * from students where stuId=1",function (err,result,fields) {
            if(err){
                console.log(err.message);
                return;
            }

            if(result.length){
                console.log(result);
            }

            client.end();
        });

/*
var getPasswdById=function () {
    client.query("select passwd from students where stuId="+id,function (err,result,fields) {
        if(err){
            console.log(err.message);
            return;
        }
        console.log(result);
        client.end();
    });
};
*/
//getPasswdById("135468789");
