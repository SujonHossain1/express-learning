const multer = require('multer');
const path = require('path');
const { validationResult } = require('express-validator');

const storage = multer.diskStorage({
	destination: (req, file, cd) => {
		cd(null, 'uploads');
	},
	filename: (req, file, cb) => {
		const fileExt = path.extname(file.originalname);
		const fileName =
			file.originalname
				.replace(fileExt, '')
				.toLowerCase()
				.split(' ')
				.join('-') +
			'-' +
			Date.now();

		cb(null, fileName + fileExt);
	},
});

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 2 * 1024 * 1024,
	},
	fileFilter: (req, file, cb) => {
		if (file.fieldname === 'image') {
			if (
				file.mimetype === 'image/png' ||
				file.mimetype === 'image/jpg' ||
				file.mimetype === 'image/jpeg'
			) {
				cb(null, true);
			} else {
				cb(new Error('Allow png, jpg and jpeg'));
			}
		}
		if (file.fieldname === 'gallery') {
			if (
				file.mimetype === 'image/png' ||
				file.mimetype === 'image/jpg' ||
				file.mimetype === 'image/jpeg'
			) {
				cb(null, true);
			} else {
				cb(new Error('Allow png, jpg and jpeg'));
			}
		}
	},
});

module.exports = upload;
