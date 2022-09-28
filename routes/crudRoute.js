let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

//  Model
let crudSchema = require("../models/crud");

// CREATE 
router.post("/create", (req, res, next) => {
crudSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// READ 
router.get("/", (req, res) => {
crudSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE 
router
.route("/update/:id")
// Get Single Data
.get((req, res) => {
	crudSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Data
.put((req, res, next) => {
	crudSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		} else {
		res.json(data);
		}
	}
	);
});

// Delete
router.delete("/delete/:id",
(req, res, next) => {
crudSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
