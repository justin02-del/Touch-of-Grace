//logic that conects to the db
import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Justin02:Jordinspark$02@atlascluster.r6dcxci.mongodb.net/zomato').then(()=>{
        console.log("DB connected")
    })
}
