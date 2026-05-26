import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const connectDb = async () => {
    const mongodbUri = process.env.MONGODB_URI

    if(!mongodbUri){
        console.log(`mongodbUri: ${mongodbUri}`)
        throw new Error("MONGODB_URI is not defined")
    }

    try{
        if(mongoose.connection.readyState === 1){
            console.log("Already connected to MongoDB")
            return mongoose.connection
        }
        const res = await mongoose.connect(mongodbUri)
        // console.log("MongoDB connection result:", res)
        console.log("Connected to MongoDB")
        return res
    }catch(err){
        console.error("Error connecting to MongoDB:", err);
    }
}

export default connectDb