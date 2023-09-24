import { OAuth2Client } from 'google-auth-library';
import { config } from './../config/config.js';

const client = new OAuth2Client(config.googleClientId);

async function googleVerify(token = '') {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: config.googleClientId,
	});
	const { name, picture, email } = ticket.getPayload();
	return {
		name,
		img: picture,
		email,
	};
}

export { googleVerify };
