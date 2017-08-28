//DAO数据管理层
var pool = require("../db_pool").pool;
var userSql = require("./user_sql").sql;

exports.userDao = {
    getPasswdById: function (userPhone, callback) {
        var sql = "select userPasswd from userTable where userPhone=?";
        pool.getConnection(function (err, client) {
            if (err) {
                return;
            }
            client.query(userSql.getPasswdById, [userPhone], function (err, result) {
                console.log(sql);

            if (err) {
                console.log(err.message + " from getPasswdById");
                callback("e004");
                return;
            }
            callback(result);
            //释放连接
            client.release();
        });
        })
    },
    //=========================getPasswdById

    insertUser: function (userNameT, userPasswdT, callback) {
        var sql = "select userName from userTable where userName=?";
        //userDao对象
        this.getPasswdById(userSql.getPasswdById.userPhone, function (result) {
            if (result.length == 0) {
                client.query(sql, [userNameT], function (err, result) {
                    // console.log(sql);
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    callback(result.affectedRows);
                });
            } else {
                callback("5");
            }
        });

    }
    //==============insertNew
};

//addUser
var addUser = function (userName, userPasswd) {
    var sql = "insert into userTable(userName,userPasswd) values(?,?)";
    client.query(sql, [userName, userPasswd], function (err, result) {
        if (err) {
            console.log(err.message);
            return;
        }
        try {
            console.log(result.affectedRows);
        }
        catch (e) {
            console.log(e.message);
        } finally {
            //关闭数据库连接
            //  client.end();
        }

        console.log(result);

    });
};

