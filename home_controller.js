const db = require('../config/mongoose');
 //import mongoose configuration
 const Todo = require('../models/todo.js'); 
 //import collection model of mongo database
module.exports.home = function(request , response ){
//  again we have used object named home to send these function using the name home 
      
        Todo.find({},function(err,todo){
            if(err){
                console.log("error in fetching data from data base");
            }
            return response.render('home',{
                todo_list:todo,
            });
        // these function will find the data in todo list and then render it to home

        });
}
