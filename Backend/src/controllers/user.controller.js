const express = require('express');
const router = express.Router();
const User = require('../model/user.model');
const bcrypt = require('bcrypt');

router.post("/Signup",async (req,res) => {
    try{
        let user = await User.create(req.body);
        return res.send(user)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/Signup",async (req,res) => {
    try{
        let user = await User.find().lean().exec();
        return res.send(user)
    }
    catch(e){
        return res.send(e)
    }
})

router.post("/Login",async (req,res) => {
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user){
            return res.send("User doesn't exist")
        }
        const match = await bcrypt.compare(req.body.password,user.password);
        if(!match){
            return res.send("Email or password doesn't match")
        }
        return res.send({
            name: user.name,
            id: user._id,
            email: user.email
        })
    }
    catch(e){
        return res.send(e)
    }
})


module.exports = router;