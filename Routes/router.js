const { Router } = require("express");
const router = Router();
const multer = require("multer");

const uploads = multer({ dest: "uploads/" });

const { home, upload } = require("../Controllers/homeController");
const { view } = require("../Controllers/uploadController");

router
	.get("/", home)
	.post("/upload", uploads.single("file"), upload)
	.get("/view/:fileId", view);

module.exports = router;
