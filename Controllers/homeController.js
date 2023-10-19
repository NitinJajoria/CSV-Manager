const Upload = require("../Models/upload");

//home page view controller
module.exports.home = (req, res) => {
	const searchVal = req.query.search;
	Upload.find()
		.then((files) => {
			res.render("home", {
				title: "CSV Upload",
				files,
				searchVal,
			});
		})
		.catch((err) => {
			res.redirect("/");
		});
};
//uploading a file
module.exports.upload = (req, res) => {
	console.log("body", req.body);
	console.log("file:", req.file);
	const { filename, originalname, path, size } = req.file;
	const newUpload = {
		filename,
		originalname,
		path,
		size,
	};
	Upload.create(newUpload)
		.then((createdUpload) => {
			res.redirect("/");
		})
		.catch((error) => {
			res.redirect("/");
		});
};
