const express = require('express');
const router = express.Router();
const Mobile = require('../model/mobile.model');

router.post("/",async (req,res) => {
    try{
        let mobile = await Mobile.create(req.body);
        return res.send(mobile)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/",async (req,res) => {
    try{
        let mobile = await Mobile.find().lean().exec();
        return res.send(mobile)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/:id",async (req,res) => {
    try{
        let mobile = await Mobile.findOne({_id:req.params.id});
        return res.send(mobile)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/filter",async (req,res) => {
    
    try{
        const mobiletitle=req.params.category
        let mobile = await Mobile.find({title:mobiletitle}).lean().exec();
        return res.send(mobile)
    }
    catch(e){
        return res.send(e)
    }
})



module.exports = router;