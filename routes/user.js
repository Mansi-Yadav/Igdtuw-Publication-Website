const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createuser");
const { loginUser } = require("../controller/loginUser");
const { userData } = require("../controller/userdata");
const { UploadPaper } = require("../controller/uploadPaper");
const {getpaper } = require("../controller/viewpaper");
const {searchpaper } = require("../controller/search");

router.post("/register", createUser);
router.post("/login-user",loginUser);
router.post("/userDetails", userData);
router.post("/uploadPaper", UploadPaper);

router.get("/viewAllPaper", getpaper);
router.get("/search/:key", searchpaper);



module.exports = router;
