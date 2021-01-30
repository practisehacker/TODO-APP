//firstly we have installed express using terminal then required it here
const express = require("express");
const path = require("path");
const db = require("./config/mongoose");
const Todo = require("./models/todo.js");
//we have required all the files that are required
const app = express();
const port = 8080;
//here we have called the express in const app and defined const port

app.set("view engine", "ejs");
app.set("views", "./views");
//we have set the view engine as ejs and
//and for views we have directed it to views folder
app.use(express.urlencoded());
// parses urlencoded bodies and returns where the content type header matches type option
app.use(express.static("assets"));
//it is used to use assets like css image etc

app.use("/", require("./routes"));

//we have not created the controller we have directed it towards routes

app.listen(port, function (err) {
  if (err) {
    console.log("error found in running the server", err);
    return;
  }
  console.log("Server is succesfully running on port ", port);
});

// above function will listen at particular port and after that function will execute
