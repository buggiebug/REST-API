const router = require("express").Router();
const userModel = require("../models/users");

// Here we are using middleware for fetching user data from the awthtoken after finding user data we can verify it from our database and send respose without showing password...

const fetchuser = require("../middleware/fetchUser");

router.get("/userdetails",fetchuser,async(req,res)=>{

    try {
        const userID = req.user;
        const userFind = await userModel.findById(userID).select("-password");
        res.status(200).json({userFind:userFind});
    } catch (error) {
        res.status(401).send({ err: "Try with valid token..." });
    }

});

module.exports = router;

