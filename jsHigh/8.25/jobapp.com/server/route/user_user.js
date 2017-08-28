var url=require("url");
var querystring=require("querystring");
var user_dao=require("../dao/user_dao").userDao;
var util=require("../utils/util");
//用户模块的路由
exports.route=function (request,response) {
    var pathname=url.parse(request.url).pathname;
    if(pathname.indexOf('/login')!=-1){
        login(request,response);
    }else if(pathname.indexOf('/regist')!=-1){
        regist(request,response);
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
            //这里的loginUserPhone是html中的name值
            user_dao.getPasswdByPhone(user.loginPhone,function (result) {
                // console.log(result[0].user_passwd);
               //如果result传来的e004则直接告诉用户，否则去解析result
                if(result=="e004"){
                   response.end(result);
               }else {
                   if(result.length==0){
                       response.end("3");
                   }else {
                       if(result[0].user_passwd==user.loginPasswd){
                           response.end("1");
                       }else {
                           response.end("2");
                       }
                   }
               }

            })
        }else{
            console.log("user的json数据为空")
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
        if(user){
            user.registPasswd=util.MD5(user.registPasswd);

            user_dao.regist(user.registPhone,user.registPasswd,function (result) {
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