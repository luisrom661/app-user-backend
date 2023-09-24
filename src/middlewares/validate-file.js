import { response } from 'express';

export const validateFile = (req, res = response, next) => {
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
		return res.status(400).json({
			msg: 'No files to upload - validateFileUpload',
		});
	}
	next();
};
