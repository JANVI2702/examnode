const { default: mongoose } = require("mongoose");

const productSchema= new mongoose.Schema(
   {
    name:String,
    image:String,
    price:Number,
    description :String
   },
   {
    timestamps:true
   }
)

const productModel = mongoose.model("productTable",productSchema)
module.exports = productModel;  