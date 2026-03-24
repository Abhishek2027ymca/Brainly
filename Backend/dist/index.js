"use strict";
// always check laction for rrot dir and out dir
// we ant a very strick types ,
// i got an erro of declaration file not found for express , so i have to install @types/express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// add .d.dts file for custom types and declare module for express
const express_1 = __importDefault(require("express")); // import exrpress 
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const secretKey = "jfvnjhbs656435";
const app = (0, express_1.default)();
app.use(express_1.default.json());
// becausdse i am exppectin the req body to be in json format so i have to use express.json() middleware
app.post("/api/v1/signup", async (req, res) => {
    // zod validation 
    // jab bhi bnada signup kare 
    // get their username and password from the req body
    try {
        const username = req.body.username;
        const password = req.body.password;
        // has the pasword 
        await db_1.UserModel.create({
            username: username,
            password: password
        });
        res.json({
            message: "User created successfully"
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error creating user , as user exist "
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await db_1.UserModel.findOne({ username, password });
    // if user exist  then create a toikenn 
    if (!existingUser) {
        res.status(400).json({
            message: "Invalid credentials"
        });
    }
    else {
        // process of making a jwt token 
        const token = jsonwebtoken_1.default.sign({ username: username }, secretKey);
        // through that token  
        res.json({
            token: token
        });
    }
});
app.get("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map