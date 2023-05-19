const User = require("../models/User");
const bcrypt= require("bcryptjs");

exports.createUser = async (req, res) => {
   console.log("hi");
      console.log("req body", req.body);
      const { username,  email,  password, password2} = req.body;
      const name= username;

      if(password != password2){
        return res.status(400).json({
          status: 400,
          message: "001",
        });
      }
      const encryptedPassword= await bcrypt.hash(password,10);
     
    try {
       if (!name || !email || !password || !password2 ) {
        console.log("not all fields...");
        return res.status(400).json({
          status: 400,
          message: "Please fill all fields",
        });
      }

      const olduser= await User.findOne({email});
      if(olduser){
        return res.json({error:"User already exist"});
      }
      
      const user = await User.create({
        username,
        email,
        password: encryptedPassword,

      });
      return res.status(200).json({
        status: 200,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  