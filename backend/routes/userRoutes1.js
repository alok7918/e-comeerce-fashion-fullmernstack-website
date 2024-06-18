const express = require("express");
const router = express.Router();

const userController=require("../controllers/UserController")


router.post("/usersignup",userController.usersignup)
router.post("/userLogin",userController.userLogin)

module.exports=router ;