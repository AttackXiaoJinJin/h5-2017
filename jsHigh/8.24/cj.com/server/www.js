//服务器的建立
var http = require("http");
var url=require("url");
var user_route=require("./route/user_route");
// var book_route=require("./route/book_route");
http.createServer(function (request,response) {
    var pathname=url.parse(request.url).pathname;
       if(pathname.indexOf("/user")!=-1){
           user_route.route(request,response);
       }
       // else if(pathname.indexOf("/book")!=-1){
       //     book_route.route(request,response);
       // }


}).listen(3001);