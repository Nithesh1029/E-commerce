import mongoose, { mongo } from "mongoose";

import 'dotenv/config'; 



export const Connection=async()=>{

    const URl=process.env.URL;
    try {
        await mongoose.connect(URl);

        console.log("Database Connected successfully");
    } catch (error) {
        console.log("error while connection",error.message);
        
    }
}


export default Connection;