let mongodb=require('mongodb')
var server = new mongodb.Server('localhost',27017,{auto_reconnect:true})

var db = new mongodb.Db('bookapp',server,{safe:true})

db.open(function (error,database) {
  if(error){
    return
  }

  db.createConnection('comments',{safe:true},function (err,collection) {
    if(err){
      console.log(err)
    }else{
      collection.find().toArray(function (err,docs) {
        console.log('find')
        console.log(docs)
      })
    }
  })

})