const jwt = require("jsonwebtoken");

// Secret key is private  key which is used on server side to for verifying JWT...

const SECRET_KEY = process.env.SECRET_KEY;


// This is middleware, which fatches user data from the awthtoken....

const fetchuser = (req,res,next)=>{

    const awthToken = req.header("awthToken");

    if(!awthToken){
        return res.status(401).json({msg:"Awthtoken missing..."});
    }

    try {
        const data = jwt.verify(awthToken,SECRET_KEY);
        req.user = data.data;
    } catch (error) {
        return res.status(401).send({err:"Internal server error in token"});
    }

    next();
}

module.exports = fetchuser;

