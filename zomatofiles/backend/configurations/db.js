//logic that conects to the db
import mongoose from "mongoose";
import 'dotenv/config'

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error("MONGODB_URI is not defined in environment variables");
    process.exit(1);
}

export const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("DB connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}