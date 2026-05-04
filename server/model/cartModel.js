import mongoose from "mongoose";
import Product from "./productModel";

const cartItemSchema=new mongoose.Schema({
    Product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        default:1
    }
})


const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    items:[cartItemSchema]
});

export default mongoose.model("Cart",cartSchema);