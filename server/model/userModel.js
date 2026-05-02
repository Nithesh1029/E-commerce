
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
        lowercase:true,    
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
    isVerified:{
        type:Boolean,       
        default:false,

    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"

    },
    userOtp:{
        type:String,
        default:''
    },
    userOtpExpires:{
        type:Number,
        default:0
    },
    reSendOtp:{
        type:String,
        default:''
    }


});


const user = mongoose.model('User',userModel);
export default user;