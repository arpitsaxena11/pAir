import pairModel from "../models/pairModel.js";
import fs from 'fs'


// add pair item
const addPair = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const pair = new pairModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename 
    })
    try{
        await pair.save();
        res.json({success:true,message:"Product Added"})
    }catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}


// all product list
const listPair = async (req,res) =>{
    try{
        const pairs = await pairModel.find({});
        res.json({success:true,data:pairs})
    }catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove pair item 
const removePair = async (req,res)=>{
    try {
        const pair = await pairModel.findById(req.body.id);
        fs.unlink(`uploads/${pair.image}`,()=>{})

        await pairModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addPair,listPair,removePair}