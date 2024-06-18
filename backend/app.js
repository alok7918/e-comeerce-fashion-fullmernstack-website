require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");



const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 5000;
// const session = require("express-session");
// const passport = require("passport");
// const OAuth2Strategy = require("passport-google-oauth2").Strategy;
// const userdb = require("./models/userSchema1")
const session = require("express-session");
const passport = require("passport");
const authRouter = require("./routes/authRouter");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./models/userSchema1");
const clientid = "2242281939-fq6t4j0deeloir2462pkpfjhuu3d6h7j.apps.googleusercontent.com"
const clientsecret = "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"



app.use(express.json());
app.use(cookiParser());
// app.use(router);
app.use("/api",router)
const adminRoutes = require("./routes/AdminRoutes")

// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// }));

app.use(express.json());
app.use("/Admin",adminRoutes);


const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


// setup session
app.use(session({
    secret:"AIzaSyDoAnmBDmlLRGLZDNaRY6XTVXF0Bt88OaM",
    resave:false,
    saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await userdb.findOne({googleId:profile.id});

            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

app.use("/",authRouter)

const Mailrouter = require("./routes/Nodemailerfromcontect");
app.use("/send",Mailrouter)
const paymentRoute =require("./routes/paymentRoute");
app.use( "/payment",paymentRoute)

const DisplayRoutes = require("./routes/Displayproduct")
app.use("/Displayproduct",DisplayRoutes);
const UserRouters=require("./routes/UserRoutes1");
app.use("/user",UserRouters)




app.listen(
  port,
  console.log(`Server running on PORT ${port}...`)
);


