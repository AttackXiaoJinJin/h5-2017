//调用util
var module=require("util");
var fs=require('fs');
var readStream=fs.createReadStream('img1.jpg');
var writeStream=fs.createWriteStream(module.createUnique()+'.jpg');
readStream.pipe(writeStream);