import mongoose, { model, Model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://admin:rr8prOazvrC6Tzi1@cluster0.byjr6ke.mongodb.net/brainly")


const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String
});


const contentSchema = new Schema({
  title : { type: String, required: true },
  link : { type: String, required: true } , 
   tags : [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
   userId :{type :mongoose.Types.ObjectId, ref: 'User ' , required : true}
})


export const ContentModel = model("content" , contentSchema)








export const UserModel =  model("User" , UserSchema);
/// ste1 is toc reate the skeleton an dthne fill the the skeleton



 