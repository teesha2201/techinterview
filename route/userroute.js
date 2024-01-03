const { RegisterController, LoginController } = require("../controller/usercontroller")

const userroute=require("express").Router()
userroute.post ("/register",RegisterController)
userroute.post("/login",LoginController)

module.exports=userroute
