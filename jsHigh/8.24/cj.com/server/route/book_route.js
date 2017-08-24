var url=require("url");
exports.route=function () {
    var pathname=url.parse(request.url).pathname;
    if(pathname.indexOf("/getBooks")!=-1){
        getBooks(request,response);
    }
};
var getBooks=function (request,response) {
    response.writeHead(200,{"Content-Type":"text/html,charset=utf-8","Access-Control-Allow-Origin":"*"});
    response.end("this is getBooks");
};
