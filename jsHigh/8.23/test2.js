//服务器的建立
var http = require("http");


var server=http.createServer();
server.on('request',function (request,response) {
    //需要在浏览器中登录3003
    var req=http.request("http://localhost:3002/?tel=18852995180",function (result_obj) {
        var content="";
        result_obj.on("data",function (data01) {
            content+=data01;
        });
        result_obj.on("end",function () {
            console.log(content);
        });
        result_obj.on("error",function (err) {
            console.log(err.message);
        });
    });
    req.end();
    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"*"});
    response.write("test3003");
    response.end();
}).listen(3003);