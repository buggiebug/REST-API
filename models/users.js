const mongoose = require("mongoose");

// Creating Schema for the users...

const userSchema = mongoose.Schema({
    "firstName":String,
    "lastName":String,
    "userName":String,
    "password":String
});

const userModel = mongoose.model("userData",userSchema);

module.exports = userModel;