const router = require("express").Router();


var jwt = require('jsonwebtoken');

//  Using bcrypt.js for encrypting password & adding some salt for hiding the password.
const bcrypt = require('bcrypt');
const saltRounds = 5;

const userModel = require("../models/users");


router.post("/signup",async(req,res)=>{

    const {firstName,lastName,userName,password} = req.body;

    const hashPass = await bcrypt.hash(String(password),saltRounds);

    const userFin = await userModel.findOne({userName:userName});

    if(userFin){
        return res.status(401).json({msg:"User already exist."});
    }
    else{
        const result = new userModel({
            firstName:firstName,
            lastName:lastName,
            userName:userName,
            password:hashPass
        });

        result.save(async(err,data)=>{
            if(err){ 
                throw err
            }else{

                // After saving user data into database agian we fetch it and generate awthtoken using usr data...
                const userData = await userModel.findOne({userName:userName});
                const awthToken = jwt.sign({ data: userData },process.env.SECRET_KEY);

                return res.status(200).json({awthToken : awthToken});
            }
        });
    }

});

module.exports = router;

