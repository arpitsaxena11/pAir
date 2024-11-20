import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://saxenaarpit:C5FEWRIOvX6qTiRG@cluster0.qfqtx.mongodb.net/pair').then(()=>console.log("DB Connect"));
}