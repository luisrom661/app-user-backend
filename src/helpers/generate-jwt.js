import jwt from 'jsonwebtoken';
import { config } from './../config/config.js';

export const generateJWT = (uid = '') => {
	return new Promise((resolve, reject) => {
		const payload = { uid };
		jwt.sign(
			payload,
			config.secretjwt,
			{
				expiresIn: '4h',
			},
			(err, token) => {
				if (err) {
					console.error(err);
					reject('Unable to generate the token.');
				} else {
					resolve(token);
				}
			},
		);
	});
};
