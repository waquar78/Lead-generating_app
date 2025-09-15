import mongoose from "mongoose";

const leadSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true
    }

},{timestamps: true})
const Lead=mongoose.model("Lead",leadSchema);
export default Lead;