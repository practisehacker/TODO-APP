const db = require('../config/mongoose');
 //import mongoose configuration
 const Todo = require('../models/todo.js'); 
// again we have imported the required file
module.exports.delete = function(req,res){
    // we have here exported these function using the object delete

    let id = req.query.id;
    console.log(id);
    Todo.deleteMany({_id:{$in:id}},(err,todo)=>{
        if(err){
            console.log(err);return;
        }
        return res.redirect('back');
    })
    //  here todo.delte is used to delete the multiple entries 
  };