//服务器的建立
var http = require("http");
//解析url
var url_require=require("url");
var query_string=require("querystring");
var server=http.createServer();
server.on('request',function (request,response) {
    var users=[{id:'001'},{id:'002'}];

    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"http://localhost:63342"});
    try{
        // response.write(users[0].id);
        setTimeout(function () {
            response.write(users[2].id);
            response.end();
        },200)
    }catch (e){
        response.write(e.message);
    }finally {
        response.end();
    }

}).listen(3005);