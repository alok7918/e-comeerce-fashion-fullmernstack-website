const express = require("express");
const router = express.Router();
const authController=require("../controllers/authController")
const passport = require("passport");


// //  initial google ouath login
// router.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

// router.get("/auth/google/callback",passport.authenticate("google",{
//    successRedirect:"http://localhost:3000/dashboard",
//    failureRedirect:"http://localhost:3000/login"
// }))


// router.get("/login/sucess",async(req,res)=>{

//    if(req.user){
//        res.status(200).json({message:"user Login",user:req.user})
//    }else{
//        res.status(400).json({message:"Not Authorized"})
//    }
// })

// router.get("/logout",(req,res,next)=>{
//    req.logout(function(err){
//        if(err){return next(err)}
//        res.redirect("http://localhost:3000");
//    })
// })











//  initial google ouath login
router.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

router.get("/auth/google/callback",passport.authenticate("google",{
   successRedirect:"http://localhost:3000/dashboard",
   failureRedirect:"http://localhost:3000/login"
}))


router.get("/login/sucess",authController.sucess)

router.get("/logout",authController.logout)


module.exports = router;
