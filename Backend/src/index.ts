// always check laction for rrot dir and out dir
// we ant a very strick types ,
// i got an erro of declaration file not found for express , so i have to install @types/express

// add .d.dts file for custom types and declare module for express

import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const app = express();



app.get("/api/v1/signin", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});
app.get("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});
