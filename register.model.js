const mongoose = require('mongoose');

const userRegisterSchema  =  new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("Register",userRegisterSchema)

