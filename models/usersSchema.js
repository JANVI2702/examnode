const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema(
    {
        username:String,
        email:String,
        password:String,
        phone:Number,
    },{
        timestamps:true,
    }
)

const UserModel = mongoose.model("userTable",userSchema)

module.exports=UserModel