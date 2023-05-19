const User = require("../models/User");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");
// const JWT_SECRET= require("../");

const JWT_SECRET = process.env.JWT_SECRET;
exports.loginUser = async (req, res) => {
    console.log("req body", req.body);
    const { email, password} = req.body;

    const user= await User.findOne({email});
    if(!user){
        return res.json({error:"User not found. Please SignUp first."});

    }

    if(await bcrypt.compare(password, user.password)){
        const token= jwt.sign({email: user.email}, JWT_SECRET, {
            expiresIn: "215m",
        });

        if(res.status(201)){
            return res.json({status:"ok", data: token});
        }
        else{
            return res.json({error: "error"});
        }
    }
    res.json({status:"error", error:"Password Incorrect"});

};






