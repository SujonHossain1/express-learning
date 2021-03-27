const router = require('express').Router();
const { createProduct } = require('../controllers/product');
const upload = require('../middlewares/upload');
const productValidator = require('../validators/product');

router.post(
	'/add-product',
	upload.fields([
		{ name: 'image', maxCount: 1 },
		{ name: 'gallery', maxCount: 3 },
	]),
	productValidator,
	createProduct
);

module.exports = router;
