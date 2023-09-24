import 'dotenv/config';

export const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	dbHost: process.env.MONGODB_CNN || 'localhost',
	secretjwt: process.env.SECRETORPRIVATEKEY,
	googleClientId: process.env.GOOGLE_CLIENT_ID,
};
