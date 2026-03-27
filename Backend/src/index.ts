// always check laction for rrot dir and out dir
// we ant a very strick types ,
// i got an erro of declaration file not found for express , so i have to install @types/express

// add .d.dts file for custom types and declare module for express

import express from "express";  // import exrpress 
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserModel } from "./db";
import { secretKey } from "./config";
import {userMiddleware} from "./middleware";


const app = express();
app.use(express.json());
// becausdse i am exppectin the req body to be in json format so i have to use express.json() middleware


app.post("/api/v1/signup", async (req, res) => {
    // zod validation 
// jab bhi bnada signup kare 
// get their username and password from the req body

try {
    const username =  req.body.username;
    const password =  req.body.password;

    // has the pasword 
     await UserModel.create({
        username : username ,
        password : password
     })

     res.json({
        message : "User created successfully"
     })

} catch (error) {
    res.status(400).json({
        message : "Error creating user , as user exist "
    })

}
})





app.post("/api/v1/signin", async (req, res) => {


   const username = req.body.username ;
   const password = req.body.password;

   const existingUser = await UserModel.findOne({ username  , password});

   // if user exist  then create a toikenn 
   if(!existingUser){
    res.status(403).json({
        message : "Invalid credentials"
    })
   } else {
      // process of making a jwt token 
    const token = jwt.sign({ id : existingUser._id }, secretKey);
    // through that token  
    res.json({
        token : token   

    })
   }

});



app.get("/api/v1/content", userMiddleware, (req, res) => {

   const link = req.body.link ;
   const type = req.body.type ;

   // to get userid , use middleware to verify the token and get the user id from the token and then use that user id to get the content of that user
  


});
app.get("/api/v1/brain/:shareLink", (req, res) => {


});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
