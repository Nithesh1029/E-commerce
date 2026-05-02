import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

const userAuth = async (req, res, next) => {
  try {

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Login again"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const foundUser = await User.findById(decoded.id)
      .select("isVerified role");

    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    req.user = {
      userId: foundUser._id,
      isVerified: foundUser.isVerified,
      role: foundUser.role
    };

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: error.message
    });

  }
};

export default userAuth;