var mongoose = require('mongoose')
var DB_url = 'mongodb://localhost:27017/hunt'

mongoose.connect(DB_url)

mongoose.connection.on('connected',function () {
  console.log("连接到"+DB_url)
})

mongoose.connection.on('error',function (err) {
  console.log("错误："+err)
})

mongoose.connection.on('disconnected',function () {
  console.log("没有连接到")
})

module.exports=mongoose



