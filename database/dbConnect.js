const mongoose = require("mongoose");

const dbCon = ()=>{
    mongoose.connect("mongodb://localhost:27017/wobot").then(()=>{
        console.log("DB connected...");
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = dbCon;