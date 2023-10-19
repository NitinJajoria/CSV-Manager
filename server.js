const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const multer = require("multer");
require("./Configuration/mongoose");
const router = require("./Routes/router");
const port = process.env.port || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.set("view engine", "ejs");
app.set("views", "./Views");

//static files set up
app.get("/public/css/output.css", (req, res) => {
	res.setHeader("Content-Type", "text/css");
	res.sendFile(__dirname + "/public/css/output.css");
});
app.get("/public/js/home.js", (req, res) => {
	res.setHeader("Content-Type", "text/javascript");
	res.sendFile(__dirname + "/public/js/home.js");
});

app.listen(port, (err) => {
	if (err) {
		console.log("something went wrong:", err);
	}
	console.log("Listening on port:", port);
});
