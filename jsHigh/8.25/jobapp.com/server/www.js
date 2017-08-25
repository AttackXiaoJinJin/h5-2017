//服务器的建立
var http = require("http");
var url=require("url");
var user_user=require("./route/user_user");

http.createServer(function (request,response) {
    var pathname=url.parse(request.url).pathname;
    if(pathname.indexOf("/user")!=-1){
        user_user.route(request,response);
    }


}).listen(3001);