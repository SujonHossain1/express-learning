const { validationResult } = require('express-validator');
const Product = require('../models/Product');

exports.createProduct = async (req, res, next) => {
	try {
		console.log(req.files);
		const errors = validationResult(req).formatWith((err) => err.msg);
		if (!errors.isEmpty()) {
			return res.status(400).send(errors.mapped());
		}

		res.send('Working');
	} catch (err) {
		next(err);
	}
};
