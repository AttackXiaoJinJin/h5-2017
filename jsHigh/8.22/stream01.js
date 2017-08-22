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
//输出流
//有就写入，没有就创建
// var writeStream=fs.createWriteStream(createFileName()+'new_content.txt');
//img
var writeStream=fs.createWriteStream(createFileName()+'.jpg');
var content="";
readStream.on("data",function (data) {
    content=data;
});
//end表明content拿到所有数据
readStream.on("end",function () {
    // console.log(content.toString("utf-8"));
    //将图片转化成base64字符串
    var img_base64=content.toString('base64');
    console.log(img_base64);
    writeStream.write(content,"utf-8");
    writeStream.end();
});
readStream.on("error",function (error) {
    console.log(error.message);
});
