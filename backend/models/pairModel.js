import mongoose from "mongoose";

const pairSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:String,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

const pairModel = mongoose.models.pair || mongoose.model("pair",pairSchema)

export default pairModel;