
import { products } from "./constants/data.js"

import Product from "./model/productModel.js";


const Default =async()=>{
    try {
        
        await Product.insertMany(products);
        console.log("Data Inserted successfully");
        
    } catch (error) {
        console.log(`Error while inserting data`,error.message);
    }
}

export default Default;