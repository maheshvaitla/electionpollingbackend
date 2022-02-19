const express =require("express");

const router = express.Router();

const City = require("../models/city.model");

router.post("/", async (req,res)=>{
    try{
        const citys = await City.create(req.body);

       return res.status(201).json({citys});

    } catch(e){
        return res.status(500).json({status : "failed", message : e.message})
    }
})

router.get("/",async (req,res)=>{
    try {

        const page =+req.query.page || 1;
        const size =+req.query.size || 6;

        const skip =(page-1)*size;
        const city = await City.find().skip(skip).limit(size).lean().exec()
        

        return res.send({city})



    } catch (e){
        return res.status(500).json({status : "failed", message : e.message})
    }
})


router.get("/sort",async (req,res)=>{
    try {

        const page =+req.query.page || 1;
        const size =+req.query.size || 6;

        const skip =(page-1)*size;
        const city = await City.find().sort({population :1}).skip(skip).limit(size).lean().exec()
        

        return res.send({city})



    } catch (e){
        return res.status(500).json({status : "failed", message : e.message})
    }
})

router.get("/sort1",async (req,res)=>{
    try {

        const page =+req.query.page || 1;
        const size =+req.query.size || 6;

        const skip =(page-1)*size;
        const city = await City.find().sort({population :-1}).skip(skip).limit(size).lean().exec()
        

        return res.send({city})



    } catch (e){
        return res.status(500).json({status : "failed", message : e.message})
    }
})

module.exports =router