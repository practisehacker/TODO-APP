const db = require('../config/mongoose');
 //import mongoose configuration
 const Todo = require('../models/todo.js'); 
//  importing the modals of todo.js
 module.exports.createNewTodo = function(request , response ){
            // we have exported the above function with object name as createNewTodo
            console.log(request.body);
            Todo.create({
                description:request.body.description,
                dueDate:request.body.dueDate,
                category:request.body.category,
                // all the data will comein request and then todo.create will feed the data in particular entry
                // means description will get data in  request then in request body there will be description duedate and category

            },function(err,todo){
                if(err){
                    console.log("error in creating Todo",err);
                    return;
                }
                // these is call back function if error comes then error is displayed
                console.log("************************",todo);
               return response.redirect('/');
            })
        }
        // if not error then it will print entry and then redirect to home page

 