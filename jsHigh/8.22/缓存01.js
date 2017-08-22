var buffer01=new Buffer(10);
console.log(buffer01.length);
var buffer02=new Buffer("hello world");
//默认编码为utf-8,故可以不写
// var buffer02=new Buffer("hello world","utf-8");
//16进制，asci码
console.log(buffer02);
//write参数(data,index,length,encode),写入数据
buffer01.write("哈哈哈",2,6);
// buffer01.write("哈哈哈",2,6,"utf-8");
//一个中文占3个字节
//读取数据
console.log(buffer01.toString("base64"));








