import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type:String,
        unique:true,
        required:true,
    },   
    url: String,
    detailUrl: String,
    price: Number,
    quantity: Number,
    description: String,
    tagline: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;