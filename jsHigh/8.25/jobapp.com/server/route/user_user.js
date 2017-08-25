var url=require("url");
var querystring=require("querystring");
var user_dao=require("../dao/user_dao").userDao;
var util=require("utils/util");
//用户模块的路由
exports.route=function (requset,response) {
    var pathname=url.parse(request.url).pathname;
    if(pathname.indexOf('/login')!=-1){
        login(requset,response);
    }else if(pathname.indexOf('/regist')!=-1){
        regist(requset,response);
    }
};


function login(request,response) {
    var content="";
    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"http://localhost:63342"});
    request.on("data",function (data) {
        content+=data;
    });
    request.on("end",function () {
        var user=querystring.parse(content);
        if(user){
            user_dao.getPasswdById(user.userPhone,function (result) {
               //如果result传来的e004则直接告诉用户，否则去解析result
                if(result=="e004"){
                   response.end(result);
               }else {
                   if(result.length==0){
                       response.end("3");
                   }else {
                       if(result[0].userPasswd==user.userPasswd){
                           response.end("1");
                       }else {
                           response.end("2");
                       }
                   }
               }

            })
        }
    });
    request.on("error",function (err) {
        console.log(err.message);
        response.end("e404");
    })
}
//===========login

function regist(request,response) {
    var content="";
    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"http://localhost:63342"});
    request.on("data",function (data) {
        content+=data;
    });
    request.on("end",function () {
        var user=querystring.parse(content);
        user.userPasswd=util.MD5(user.userPasswd);
        if(user){
            user_dao.addUser(user,function (result) {
                //如果result传来的e004则直接告诉用户，否则去解析result
                if(result=="e004"){
                    response.end("e004");
                }else {
                    if(result=="1"){
                        response.end("6");
                    }else if(result=="0"){
                            response.end("7");
                        }else if (result=="5"){
                            response.end("5");
                        }
                }

            })
        }
    });
    request.on("error",function (err) {
        console.log(err.message);
        response.end("e404");
    })
}