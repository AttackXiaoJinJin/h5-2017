//服务器的建立
var http = require("http");
var url=require("url");
var querystring=require("querystring");
var server=http.createServer();
server.on('request',function (request,response) {
    //3003登录就请求了这边，可以拿到3003的数据
    // var phone=querystring.parse((url.parse(request.url)).query);
    var phone=querystring.parse(((require("url")).parse(request.url)).query);
    var num="123456";
    console.log("sendmessage to"+phone.tel+":"+num);
    // console.log(phone.tel);

    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"*"});
    response.write(num);
    response.end();
}).listen(3002);