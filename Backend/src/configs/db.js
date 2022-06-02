const mongoose = require('mongoose');


const connect = () => {
   
    return  mongoose.connect("mongodb+srv://Manish:Manish_000@app-tronix.incqx.mongodb.net/test")
}
module.exports=connect;