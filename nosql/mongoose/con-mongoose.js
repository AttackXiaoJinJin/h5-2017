let mongoose = require('mongoose')
let Schema=mongoose.Schema
let UserSchema = new Schema({
  username:{type:String,index:true},
  userpwd:{type:String},
  userage:{type:Number},
  logindate:{type:Date,default:Date.now},
})



module.exports.user=mongoose.model('User',UserSchema)
// module.exports.position=mongoose.model('Position',PositionSchema)




