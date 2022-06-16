const router = require("express").Router();

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userModel = require("../models/users");

router.get("/login",async (req,res)=>{
    const {userName,password} = req.body;

    if(userName!=="" || password!==""){
        const userFin = await userModel.findOne({userName:userName});

        if(!userFin){
            return res.status(401).json({msg:"User not found..."})
        }else{
            const userPass = userFin.password;
    
            // Comparing user password & encrypted password which is in our database...

            const validUser = await bcrypt.compare(String(password),userPass)
            if(validUser === true){

                // After comparing password we can generate awth token...

                const awthToken = jwt.sign({ data: userFin },process.env.SECRET_KEY);
                return res.status(200).json({awthToken:awthToken});
            }else{
                return res.status(401).json({msg:"User not found..."})
            }
        }
    }

})

module.exports = router;