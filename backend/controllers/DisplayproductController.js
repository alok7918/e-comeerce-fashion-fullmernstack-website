const AddProModel=require("../models/AddproductModels");


const LoadfeatureProduct=async(req,res)=>{
try {
     let mydata=await AddProModel.find({Tag:"featuredData"}).sort({_id:-1}).limit(4)
     res.status(200).send(mydata)   
    //   console.log(mydata);
    } catch (error) {
        res.status(404).send('Status: Not Found')
    }
}


const  LoadhotnewProduct=async(req,res)=>{
    try {
         let mydata=await AddProModel.find({Tag:"newArrivalData"}).sort({_id:-1}).limit(4)
         res.status(200).send(mydata)   
        //   console.log(mydata);
        } catch (error) {
            res.status(404).send('Status: Not Found')
        }
    }
    const  LoadBestsellProduct=async(req,res)=>{
        try {
             let mydata=await AddProModel.find({Tag:"mensCatalog"}).sort({_id:-1})
             res.status(200).send(mydata)   
            //   console.log(mydata);
            } catch (error) {
                res.status(404).send('Status: Not Found')
            }
        }
        const  LoadRecommendedProduct=async(req,res)=>{
            try {
                 let mydata=await AddProModel.find({Tag:"womensCatalog"}).sort({_id:-1}).limit(4)
                 res.status(200).send(mydata)   
                //   console.log(mydata);
                } catch (error) {
                    res.status(404).send('Status: Not Found')
                }
            }

            const  Lime=async(req,res)=>{
                try {
                     let mydata=await AddProModel.find({Tag:"limelightCatalog"}).sort({_id:-1}).limit(4)
                     res.status(200).send(mydata)   
                    //   console.log(mydata);
                    } catch (error) {
                        res.status(404).send('Status: Not Found')
                    }
                }

            const  LoadAllProduct=async(req,res)=>{
                try {
                     let mydata=await AddProModel.find().sort({_id:-1})
                     res.status(200).send(mydata)   
                    //   console.log(mydata);
                    } catch (error) {
                        res.status(404).send('Status: Not Found')
                    }
                }
            
const Loadheadphone=async(req,res)=>{
    try {
         let mydata=await AddProModel.find({Category:"Mobile accessories"}).sort({_id:-1})
         res.status(200).send(mydata)   
        //   console.log(mydata);
        } catch (error) {
            res.status(404).send('Status: Not Found')
        }
    }



    const LoadLaptop=async(req,res)=>{
        try {
             let mydata=await AddProModel.find({Category:"Laptop"}).sort({_id:-1})
             res.status(200).send(mydata)   
            //   console.log(mydata);
            } catch (error) {
                res.status(404).send('Status: Not Found')
            }
        }

        const Loadmobile=async(req,res)=>{
            try {
                 let mydata=await AddProModel.find({Category:"Mobile"}).sort({_id:-1})
                 res.status(200).send(mydata)   
                  console.log(mydata);
                } catch (error) {
                    res.status(404).send('Status: Not Found')
                }
            }
            const Loadsmartwatch=async(req,res)=>{
                try {
                     let mydata=await AddProModel.find({Category:"smart watch"}).sort({_id:-1})
                     res.status(200).send(mydata)   
                      console.log(mydata);
                    } catch (error) {
                        res.status(404).send('Status: Not Found')
                    }
                }

module.exports={
    LoadfeatureProduct,
    LoadhotnewProduct,
    LoadBestsellProduct,
    LoadRecommendedProduct,
    Lime,
    LoadAllProduct,
    Loadheadphone,
    LoadLaptop,
    Loadmobile,
    Loadsmartwatch

 }