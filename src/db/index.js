import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://killingCammand:16890137@killingcammmand.6c9dd.mongodb.net/?retryWrites=true&w=majority&appName=KillingCammmand`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ");
        process.exit(1)
    }
}

export default connectDB