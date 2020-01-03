 const mongoose = require('mongoose')
const  Category =mongoose.model('Category',new mongoose.Schema({

  name:{type:String},
  parent:{type:mongoose.SchemaTypes.ObjectId, ref:'Category'},
  
  
}))

module.exports = Category