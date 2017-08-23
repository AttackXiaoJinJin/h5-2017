//服务器的建立
var http = require("http");
var url=require("url");
var server=http.createServer();
server.on('request',function (request,response) {

   var pathname=url.parse(request.url).pathname;
   console.log(pathname);

}).listen(3003);