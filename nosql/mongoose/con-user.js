var User=require('model-mongoose').user
// var Position=require('model-mongoose').position

function insert(user) {
  var us=new User(user)

  // var user=new User({
  //   username:'chen',
  //   userpwd:'123456',
  //   userage:12,
  //   logindate:new Date(),
  // })

  us.save(function (err,res) {
    if(err){
      console.log("Error:"+err)
    }
    else{
      console.log("Res:"+res)
    }
  })

}

function update() {
  var wherestr={'username':'chen'}
  var updatestr={'userage':18}
  User.update(wherestr,updatestr,function (err,res) {
    if(err){
      console.log("Error:"+err)
    }
    else{
      console.log("Res:"+res)
    }
  })
}

// insert()
update()