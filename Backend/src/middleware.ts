

import { NextFunction, Request, Response } from "express";
import  jwt from "jsonwebtoken"; 
import { secretKey } from "./config";



export const userMiddleware = (req : Request , res : Response , next : NextFunction) => {


const header = req.headers["authorization"];

const decodedToken = jwt.verify(header as string  , secretKey) ;


if(decodedToken){
  //@ts-ignore
    req.userId = decodedToken.id ;//need to oberrite the type of req to add userId property


next();


}else{
    res.status(403).json({
        message : "Unauthorized"
    })  
}




}