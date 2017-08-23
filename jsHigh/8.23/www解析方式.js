var http = require("http");
var url_require=require("url");
var query_string=require("querystring");
var server=http.createServer();
server.on('request',function (request,response) {
    //console.log(request.method);
    //get方式
    if(request.method.toUpperCase().trim()=='GET'){
        console.log("aaa");
        var user=query_string.parse(((require("url")).parse(request.url)).query);
        console.log(JSON.stringify(user));
    }else if(request.method.toUpperCase().trim()=='POST'){
        console.log("bbbb");
    //post方式
    var data_content="";
    request.on("data",function (data01) {
        data_content +=data01;
    });
    request.on("end",function () {
        console.log(data_content.toString());
        var user=query_string.parse(data_content);
        //判断user是否为空,空的话请求会出错
        if(user){
            console.log(user);
        }
    });
    }
    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"*"});
    response.write("okkkkk");
    response.end();
}).listen(3001);