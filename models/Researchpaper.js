const { link } = require("fs");
const mongoose = require("mongoose");

const researchppr = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		//unique: true,
	},
    paperName: {
		type: String,
		required: true,
	},
	yearOfPublication: {
		type: Number,
		required: true,
	},
    paperLink: {
		type: String,
        required: true,
	},
    
});

module.exports = mongoose.model("Researchpaper",researchppr );
