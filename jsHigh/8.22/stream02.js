//保证文件唯一
function createFileName() {
    //valueOf()转换为毫秒数
    var date=new Date().valueOf();
    var random=Math.random();
    return date+" "+random;
}
//输入流
//file_system
var fs=require('fs');
//读取aaa.txt
// var readStream=fs.createReadStream('aaa.txt');
//读取img
var readStream=fs.createReadStream('img1.jpg');
var writeStream=fs.createWriteStream(createFileName()+'.jpg');
//读到什么就写什么
readStream.pipe(writeStream);