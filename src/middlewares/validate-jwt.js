import { response, request } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../adapters/database/mongodb/schemas/index.js';
import { config } from './../config/config.js';

export const validateJWT = async (req = request, res = response, next) => {

	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({
			msg: 'Unauthorized - No token found in the request.',
		});
	}

	const token = authHeader.split(' ')[1];

	if (!token) {
		return res.status(401).json({
			msg: 'Unauthorized - No token found in the request.',
		});
	}
	
	try {
		const { uid } = jwt.verify(token, config.secretjwt);
		const user = await User.findById(uid);

		if (!user) {
			return res.status(401).json({
				msg: 'Invalid token - user does not exist in the database.',
			});
		}

		// Verify: If the uid has state: true
		if (!user.state) {
			return res.status(401).json({
				msg: 'Invalid token - user with state: false',
			});
		}
		req.user = user;
		next();
	} catch (error) {
		res.status(401).json({
			msg: 'Invalid token.',
		});
	}
};
