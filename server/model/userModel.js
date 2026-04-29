
import mongoose from "mongoose";

const userModel=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
        lastname:{
        type:String,
        required:true,
        trim:true
    },
        email:{

        type:String,
        required:true,
        trim:true,
        unique:true
    },
        password:{
        type:String,
        trim:true,
        required:true
    },    

});


const user = mongoose.model('User',userModel);
export default user;