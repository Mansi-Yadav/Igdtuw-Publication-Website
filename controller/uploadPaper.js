
const ResearchPaper = require("../models/Researchpaper");


exports.UploadPaper = async (req, res) => {
   console.log("hi");
      console.log("req body", req.body);
      const { username,  email, papername, yearofpublication, paperLink} = req.body;
      const name= username;
      const yearOfPublication = yearofpublication;
      const paperName = papername;

    try {
       if (!name || !email || !papername || !yearofpublication || !paperLink  ) {
        console.log("not all fields...");
        return res.status(400).json({
          status: 400,
          message: "Please fill all fields",
        });
      }
      
      const researchpaper = await ResearchPaper.create({
        username,
        email,
        paperName, 
        yearOfPublication,
        paperLink
        
      });
      return res.status(200).json({
        status: 200,
        message: "Paper Uploaded successfully",
        data: researchpaper,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };













