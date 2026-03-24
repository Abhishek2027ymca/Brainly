// always check laction for rrot dir and out dir
// we ant a very strick types ,
// i got an erro of declaration file not found for express , so i have to install @types/express

// add .d.dts file for custom types and declare module for express

import express from "express";  // import exrpress 
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserModel } from "./db";

const app = express();



app.get("/api/v1/signup", async (req, res) => {
    // zod validation 

    const username =  req.body.username;
    const password =  req.body.password;

     await UserModel.create({
        username : username ,
        password : password
     })

     res.json({
        message : "User created successfully"
     })

});

app.get("/api/v1/content", (req, res) => {

});

app.get("/api/v1/brain/share", (req, res) => {

});
app.get("/api/v1/brain/:shareLink", (req, res) => {


});
