const ResearchPaper = require("../models/Researchpaper");
exports.searchpaper = async (req, res) => {
	try {
            const result= await ResearchPaper.find({
                "$or": [
                    { paperName: {$regex: req.params.key, $options: 'i'}},
                    { yearOfPublication:  isNaN(req.params.key)?'':parseInt(req.params.key) },

                ]
            });
		return res.send(result);
	}
    
    catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};