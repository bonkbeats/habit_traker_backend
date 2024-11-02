const mongoose  = require('mongoose')

const todoSchema = new mongoose.Schema({

   title:{
      type:String,
      required:true,
   },
   isDone: {
      type:Boolean,
      default: false,

   },
   date: {
      type:Date,
      required:true,
   },
   
   color: {  // New color field
      type: String,
      default: '#FFFFFF' // Default color (e.g., white)
   }

})


module.exports = mongoose.model('Todo', todoSchema);

