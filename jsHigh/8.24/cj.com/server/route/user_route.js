
var url=require("url");
var querystring=require("querystring");
var user_dao=require("../DAO/user_dao").user;
var route=function (request,response) {
    var pathname=url.parse(request.url).pathname;
    // console.log(pathname);
    if(pathname.indexOf("/login")!=-1){
        login(request,response);
    }else if(pathname.indexOf("/regist")!=-1){
        regist(request,response);
    }
};

   var login=function (request,response) {
       var content="";
       response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"http://localhost:63342"});
       request.on("data",function (data) {
           content+=data;
           // console.log(content);
       });
       request.on("end",function () {
          var user=querystring.parse(content);
            // console.log(user);
          if(user){
              user_dao.getPasswdById(user.userName,function (pass) {
                  console.log(user.userName);
                  console.log(pass);
                  console.log(user.userPasswd);
                  //pass有值
                  if(pass){
                      if(pass==user.userPasswd){
                          //登陆成功
                          response.end("1");
                      }else {
                          //密码错误
                          response.end("2");
                      }
                  }
                  //passwd没有值
                  else{
                      //用户名不存在,用0表示
                      response.end("0");
                  }
              })
          }
          // console.log(user+"==this is user");
       });
    };
    var regist=function(request,response){
        var content="";
        response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"http://localhost:63342"});
        request.on("data",function (data) {
            content+=data;
        });
        request.on("end",function () {
            var user=querystring.parse(content);
            if(user){
                user_dao.insertNewUser(user.userName,user.userPasswd,function (userNameSql) {
                    console.log(user.userName);
                    console.log(userNameSql);
                    //userName存在
                    if(userNameSql){
                            //用户名已存在
                            response.end("0");
                    }
                    //新用户
                    else {
                        response.end("1");
                    }
                })
            }
        });
    };
exports.route=route;
