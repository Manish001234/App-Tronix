const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

UserSchema.pre("save",async function (next){
    let salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    return next()
})

module.exports = mongoose.model('User', UserSchema);