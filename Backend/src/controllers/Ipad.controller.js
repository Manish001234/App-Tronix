const express = require('express');
const router = express.Router();
const Ipad = require('../model/Ipad.model');

router.post("/",async (req,res) => {
    try{
        let ipad = await Ipad.create(req.body);
        return res.send(ipad)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/",async (req,res) => {
    try{
        let ipad = await Ipad.find().lean().exec();
        return res.send(ipad)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/:id",async (req,res) => {
    try{
        let ipad = await Ipad.findOne({_id:req.params.id});
        return res.send(ipad)
    }
    catch(e){
        return res.send(e)
    }
})
router.get("/filter",async (req,res) => {
    
    try{
        const ipadtitle=req.params.category
        let ipad = await Ipad.find({title:ipadtitle}).lean().exec();
        return res.send(ipad)
    }
    catch(e){
        return res.send(e)
    }
})



module.exports = router;