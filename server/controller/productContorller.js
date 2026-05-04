

import mongoose from "mongoose";
import productModel from "../model/productModel.js";

export const getProducts=async(req,res)=>{
    try {
        const pro=await productModel
                    .find()
                    .select(" id url detailUrl price quantity description tagline ")
                    .sort("id");

        return res.status(200).json({success:true,data:pro});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
}


export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID"
      });
    }

    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: "product found"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};