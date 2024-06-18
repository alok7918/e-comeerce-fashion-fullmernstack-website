const adminModel =require("../models/AdminModels")
const AddProModel=require("../models/AddproductModels");

const payModel=require("../models/paymentModels")

const userModule=require("../models/UserSignupModule")



// Admin othantication ................................
const checkadmin= async(req,res)=>{
    let { username, password} =req.body;
   //  console.log( username , password );
    await adminModel.findOne({username : username})
   .then(user => {
       // console.log(user);
       if(user){
           if(user.password === password){
               res.json("Success")
           }
           else{
               res.json("The password is incorrect")
           }
       }
       else{
           res.json("No record existed")
       }
   })}


const AddproductData=async(req,res)=>{

let names=req.body.name;
let brand=req.body.brand;
let price=req.body.price;
let imgurl=req.body.imgurl;
let Detail=req.body.Detail;
let Tag=req.body.Tag;
let Category=req.body.Category;
let size= req.body.size;
let color=req.body.color;

let data=req.body;
// console.log(data);

await AddProModel.create({
        Name:names,
        Brand:brand,
        Price:price,
        Imgurl:imgurl,
        Detail:Detail,
        Category:Category,
        Tag:Tag,
        size:size,
        color:color,

}).then(()=>{
    res.send("data save")
})
}
const DelproductData=async(req,res)=>{
let id = req.body.id;
await AddProModel.findByIdAndDelete(id).then(()=>{
res.send("successfully data delete")
})
}
const UpdatedataLoad = async(req,res)=>{
    let id = req.body.id;
    // console.log(id);
      await AddProModel.findById(id).then((data) => {
        res.send(data)
    
    })
    }


    const AddUpdateproductData=async(req,res)=>{

        let names=req.body.Name;
    
        let price=req.body.Price;
        let Detail=req.body.Detail;
        let Tag=req.body.Tag;
        let Category=req.body.Category;
        let size= req.body.size;
let color=req.body.color;
        let id = req.body.id;
       console.log(id);
await AddProModel.findByIdAndUpdate(id,{   
    Name:names,
  
    Price:price,
    Detail:Detail,
    Category:Category,
    Tag:Tag,
    size:size,
    color:color,

}).then(() => {
    res.send("data update")
    
})}

const DisplayOrder=async(req,res)=>{
    try {
        let mydata=await payModel.find().sort({_id:-1})
        res.status(200).send(mydata)   
       //   console.log(mydata);
       } catch (error) {
           res.status(404).send('Status: Not Found')
       }
}


const userData=async(req,res)=>{
    try {
        let mydata=await userModule.find().sort({_id:-1})
        res.status(200).send(mydata)   
       //   console.log(mydata);
       } catch (error) {
           res.status(404).send('Status: Not Found')
       }
}


    
 module.exports={
    checkadmin,
    AddproductData,
    DelproductData,
    UpdatedataLoad,
    AddUpdateproductData,
    DisplayOrder,
    userData,

 }