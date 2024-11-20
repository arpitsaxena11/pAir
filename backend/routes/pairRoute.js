import express from "express"
import { addPair,listPair ,removePair} from "../controllers/pairController.js"
import multer from "multer"

const pairRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

pairRouter.post("/add",upload.single("image"),addPair)
pairRouter.get("/list",listPair)
pairRouter.post("/remove",removePair);







export default pairRouter;