const mongoose = require("mongoose");

const AddProductSchema=new mongoose.Schema(

    {
        Name:String,
        Price:String,
        Imgurl:String,
        Detail:String,
        Category:String,
        size:String,
        color:String,
        Tag:String,
         
    }
);

module.exports=mongoose.model("AddProduct",AddProductSchema)