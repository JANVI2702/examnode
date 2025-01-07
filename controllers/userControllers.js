
const UserModel = require("../models/usersSchema")

module.exports.registrationPage=(req,res)=>{
    return res.render("/pages/register")
}

module.exports.registration=async(req,res)=>{
    try {
         console.log(req.body);
         let data= await UserModel.create(req.body)
        console.log("user created");
        return res.json("/user/login")
    } catch (error) {
        console.log(error);
        return res.redirect("/user/login")
    }
}
module.exports.loginPage=(req,res)=>{
    return res.render("/pages/login")
}