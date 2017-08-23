//服务器的建立
var http = require("http");
//解析url
var url_require=require("url");
var query_string=require("querystring")
var server=http.createServer();
server.on('request',function (request,response) {
    var method01=request.method;
    var url_request=request.url;
    console.log(url_request);
    var parse_url=url_require.parse(url_request);
    var name_url=parse_url.pathname;
    var query_url=parse_url.query;
    // console.log(parse_url);
    // console.log(name_url);
    // console.log(query_url);
    var json_query=query_string.parse(query_url);
    // console.log(json_query);
    // console.log(json_query.user_id);
    // console.log(json_query.user_passwd);
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
            console.log(user.userId);
        }
        console.log(user);
    });
    //解决跨域问题,*代表所有人都能访问,http://localhost:63342代表只能它能访问
    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"http://localhost:63342"});
    response.write("ok");
    response.end();
    //一句话为
   // query_string.parse(((require("url")).parse(request.url)).query)
    //判断提交方式,大小写会影响到传输
   /* if(request.method.toUpperCase().trim()=='get'){
        var user=query_string.parse(((require("url")).parse(request.url)).query);
        console.log(JSON.stringify(user));
    }*/

}).listen(3001);