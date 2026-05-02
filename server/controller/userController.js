import User from "../model/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const signUpUser = async (req, res) => {

  try {

    const exists = await User.findOne({
      email: req.body.email
    });

    if (exists) {
      return res.status(401).json({
        success: false,
        message: "user already exists"
      });
    }

    
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    );

    const userBody = {
      ...req.body,
      password: hashedPassword
    };

    const newUser = new User(userBody);

    await newUser.save();

    const token =  jwt.sign(
      {
        id:newUser._id,
        email:newUser.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn:'60min'
      }
    );

    res.cookie("token",token,{
      httpOnly:true,
      maxAge:60*60*1000
    })

    return res.status(200).json({
      success: true,
      message: "user registered successfully"
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};




export const login=async(req,res)=>{
  try {
    const exists=await User.findOne({email:req.body.email});
    if(!exists) return res.status(403).json({success:false,message:"user doesn't exists try Registering"});

    const isMatch=await bcrypt.compare(
      req.body.password,
      exists.password
    );
    if(!isMatch) return res.status(401).json({success:false,message:"Invalid Password lil bro"});

    




    const token =  jwt.sign({
      id:exists._id,
      email:exists.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn:'60min'
    }
  
  
  )


  res.cookie("token",token,{
    httpOnly:true,
    secure:false,
    maxAge:60*60*1000
  });



  return res.status(200).json({success:true,message:"login successful",token,  user:{
    firstname:exists.firstname,
    email: exists.email,
    _id:exists._id

  }});




  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}



export const sendVerifyOtp=async(req,res)=>{
  try {
    const userId = req.user.userId;
    const user =await User.findById(userId);
    if(!user)return res.status(404).json({success:false,message:"user Not found"});
    const isVerified=req.user.isVerified;
    if(isVerified) return res.status(400).json({success:false,message:"user already verified"}); 
    const otp=String(Math.floor(100000+Math.random()*900000));
    user.userOtp=otp;
    user.userOtpExpires=Date.now()+15*60*1000;
    await user.save();

    console.log(`Otp: ${otp}`);
    return res.status(200).json({success:true,message:"Otp sent!"});
  } catch (error) {
    return res.status(500).json({success:false,message:error.message});
  }
}



export const verifyOtp=async(req,res)=>{
  try {
    
    const userId = req.user.userId;
    const user=await User.findById(userId);
    if(!user){
      return res.status(404).json({success:false,message:"user Not found"});
    }
    const bodyOtp = req.body.otp;
    if(!bodyOtp){
      return res.status(400).json({success:false,message:"otp required"});
    }
    if(user.userOtp!==bodyOtp){
      return res.status(400).json({success:false,message:"Invalid Otp"});
    }
    if(Date.now()>user.userOtpExpires){
      return res.status(400).json({success:false,message:"Otp Expired"});
    }
    user.isVerified=true;
    user.userOtp="";
    user.userOtpExpires="";

  
    await user.save();
  
  
    res.status(200).json({success:true,message:"opt verified successfully"});
  } catch (error) {
    return res.status(500).json({success:false,message:error.message});
  }

}