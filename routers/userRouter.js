const { Router } = require("express");
const userController = require("../controllers/userControllers")
const userRouter = Router();


userRouter.get("/register",userController.registrationPage)
userRouter.post("/register",userController.registration)

userRouter.get("/login",userController.loginPage)

module.exports=userRouter;