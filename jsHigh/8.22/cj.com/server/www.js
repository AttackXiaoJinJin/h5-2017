//服务器的建立
var http = require("http");
var user_route=require("./route/user_route").userRoute;
var server=http.createServer();
server.on('request',function (request,response) {
    //将请求的request传给user_route的login方法
    user_route.login(request,response);
}).listen(3001);