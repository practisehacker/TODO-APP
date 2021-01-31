const mongoose = require('mongoose');
// here we have required mongoose 
 mongoose.connect('mongodb://localhost/todo_list_db');
// then we have connected to the mongo db server named todo_list""
 const db = mongoose.connection;
// here we have initiated the connection
 db.on('error',console.error.bind(console, "error connecting to mongo db server"));
// if err then error is rendered

 db.once('open', function () {
console.log("successfully connected to the mongo db server");
} );
// if connection is done then we send message connedted to monfo db server

