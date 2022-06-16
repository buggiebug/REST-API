const router = require("express").Router();
const userModel = require("../models/users");

router.get("/users",async(req,res)=>{
    const users = await userModel.find({}).select("-password");
    res.status(200).json({users:users});
})

module.exports = router;