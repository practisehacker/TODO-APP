const express = require("express");
// here also we have required the express
const router = express.Router();
// we have created the router
const homeController = require("../controller/home_controller");
const createTodo = require("../controller/create_todo");
const deleteTodo = require("../controller/delete_todo");
// we have creted three controller that is for home create and delete tasks
// basically we have created the controller function in controller folder so we have required these functions here
console.log("router is loaded");
router.get("/", homeController.home);
// here i gave console.log statement for testing
// then router.get will get executed when the request is for home or "/"
// means home controller is called and .home is the object name
router.post("/create-todo", createTodo.createNewTodo);
router.get("/delete-todo", deleteTodo.delete);
//  same way as above we have controller for create todo and delete todo

module.exports = router;
// then at last we have exported router
