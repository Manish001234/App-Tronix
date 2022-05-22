const express = require('express');
const router = express.Router();
const Laptop = require('../model/laptop.model');

router.post("/",async (req,res) => {
    try{
        let laptop = await Laptop.create(req.body);
        return res.send(laptop)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/",async (req,res) => {
    try{
        let laptop = await Laptop.find().lean().exec();
        return res.send(laptop)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/:id",async (req,res) => {
    try{
        let laptop = await Laptop.findOne({_id:req.params.id});
        return res.send(laptop)
    }
    catch(e){
        return res.send(e)
    }
})


module.exports = router;