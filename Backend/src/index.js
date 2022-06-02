const express = require('express');
const connect = require('./configs/db');

const app = express();
// require("dotenv").config()
const port=process.env.PORT || 2345

app.use(express.json());
app.use(express.static("public"))

const UserController = require('./controllers/user.controller')
const MobileController = require('./controllers/mobile.controller')
const IpadController = require('./controllers/Ipad.controller')
const LaptopController = require('./controllers/laptop.controller')
const CartMobileController = require("./controllers/cart.controller")

app.use("/auth",UserController);
app.use("/mobiles",MobileController);
app.use("/Ipads",IpadController);
app.use("/laptops",LaptopController);
app.use("/mobilecart",CartMobileController)



app.listen(port, async (req,res) => {
    try{
       await connect()
        console.log("listening on port 2345")
    }catch(e){
        res.send(e)
    }
})