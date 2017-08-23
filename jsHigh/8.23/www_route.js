//服务器的建立
var http = require("http");
var url=require("url");
var server=http.createServer();
server.on('request',function (request,response) {

   var pathname=url.parse(request.url).pathname;
   console.log(pathname);
    //报头,图片是img
    response.writeHead(200,{"Content-Type":"img/html,charset=utf-8","Access-Control-Allow-Origin":"http://localhost:63342"});
    response.write("ok");
    response.end();
}).listen(3004);