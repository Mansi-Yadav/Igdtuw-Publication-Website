const ResearchPaper = require("../models/Researchpaper");
exports.getpaper = async (req, res) => {
	try {
		const paperData = await ResearchPaper.find({}).sort({yearOfPublication: -1});
		
		res.json({ success: true, data:paperData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};


