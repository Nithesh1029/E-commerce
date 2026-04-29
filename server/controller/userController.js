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

    const token = new jwt.sign(
      {
        id:newUser._id,
        email:newUser.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn:'60min'
      }
    )

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

    




    const token = new jwt.sign({
      id:exists._id,
      email:exists.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn:'60min'
    }
  
  
  )



  return res.status(200).json({success:true,message:"login successful",token,  user:{
    firstname:exists.firstname,
    email: exists.email,
    _id:exists._id

  }});




  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}