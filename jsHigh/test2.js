
var hp=require('http');
/*
hp.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    response.write("hello js,早上好...");
}).listen(3000);
*/
var server=hp.createServer();
server.on('request',function (request,response) {
   console.log(request.url);
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    response.write("hello js,早上好...");
});
server.listen(3000);