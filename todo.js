// here we have made mongoose require 
const mongoose = require('mongoose');
// then we have created the database entries means what entries will be there in the data

const TodoSchema = new mongoose.Schema({
    description:{
        type:String,
        required: true,

    },
    dueDate:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    }

})

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
// here we have created the modal of todo schema and then we have exported the schema
