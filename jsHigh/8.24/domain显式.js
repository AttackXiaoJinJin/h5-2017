/*
emitter01.on("first",function () {
   console.log("this is first");
});
emitter01.emit("first");
*/
//域
var domain =require("jsHigh/8.24/domain显式");
var events=require("events");
//发射器
var emitter01=new events.EventEmitter();
var emitter02=new events.EventEmitter();
//创建一个区域
var area01=domain.create();
//一旦出错交给emitter01执行
area01.add(emitter01);
emitter01.on("error",function (err) {
   console.log(err.message);
});
emitter01.emit("error",new Error("error happen!"));

