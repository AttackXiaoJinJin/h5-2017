var fs=require("fs");
function createFileName() {
    //valueOf()转换为毫秒数
    var date=new Date().valueOf();
    var random=Math.random();
    return date+" "+random;
}
/*
fs.readFile("aaa.txt",function (err,data) {
   if(err){
       return;
   }
    console.log(data.toString());
});
console.log('read file end');
*/
//sync同步
//read
/*
var data=fs.readFileSync('aaa.txt');
console.log(data.toString());
console.log("read file end");
*/
//write
var data=fs.readFileSync('aaa.txt');
fs.writeFile(createFileName()+'.txt',data,function () {
    console.log("save success")
});
console.log(data.toString());
console.log("read file end");



