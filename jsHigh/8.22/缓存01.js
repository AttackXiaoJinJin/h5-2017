var buffer01=new Buffer(10);
console.log(buffer01.length);
var buffer02=new Buffer("hello world");
//16进制，asci码
console.log(buffer02);
//write(data,index,length,encode)
buffer01.write("哈哈哈",2,6);
//一个中文占3个字节
console.log(buffer01.toString("base64"));








