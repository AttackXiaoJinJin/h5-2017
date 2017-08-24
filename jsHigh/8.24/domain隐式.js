/*
emitter01.on("first",function () {
   console.log("this is first");
});
emitter01.emit("first");
*/
//域
var domain = require("jsHigh/8.24/domain显式");
var events = require("events");
//发射器
var emitter01 = new events.EventEmitter();

// 创建域
var domain01 = domain.create();
var domain02 = domain.create();

//服务器的建立
var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html,charset=utf-8",
        "Access-Control-Allow-Origin": "http://localhost:63342"
    });
    //domain是同步机制
    domain01.on("error", function (err) {
        console.log(err.message + "===from domain01 error");
        //error再出错，自己不能解决，只能再用try-catch来捕获异常
        try {
            response.write("server is error");
            response.ends();
        } catch (e) {
            console.log(e.message);
        } finally {
            response.end();
        }

    });
    //run一旦出错就交给on
    domain01.run(function () {

        response.write(b);
        //可以嵌套多层，不会向上穿透
        domain02.on("error", function (err) {
            console.log(err.message + "===from domain02 error");
        });
        domain02.run(function () {
            response.end();
        });

    });

}).listen(3001);

