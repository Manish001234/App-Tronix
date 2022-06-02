const express = require('express');
const router = express.Router();
const Mobile = require('../model/mobile.model');
const Cartmodel = require("../model/cart.model")

router.post("/",async (req,res) => {
    try{
        let cartmobile = await Cartmodel.create(req.body);
        return res.send(cartmobile)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/",async (req,res) => {
    try{
        let cartmobile = await Cartmodel.find().populate("productId").lean().exec();
        return res.send(cartmobile)
    }
    catch(e){
        return res.send(e)
    }
})
router.delete("/:id",async (req,res) => {
    try{
        const id =res.params.id
        let cartmobile = await Cartmodel.find(id).lean().exec();
        return res.send(cartmobile)
    }
    catch(e){
        return res.send(e)
    }
})





module.exports = router;