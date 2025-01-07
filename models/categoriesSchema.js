const { name } = require("ejs");
const { default: mongoose } = require("mongoose");

const categoriesSchema= new mongoose.Schema(
    {
        name:String,
        image:String, 
    }
   )

   const categoryModel = mongoose.model("categoriesModel",categoriesSchema)
   module.exports = categoryModel;  