import mongoose from 'mongoose';
import { config } from '../../../config/config.js';

export default class DbConnection {
	constructor() {
		this.isConnected = false;
	}

	async connect() {
		try {
			await mongoose.connect(config.dbHost, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			this.isConnected = true;
			console.log('¡Connected to MongoDB database!');
		} catch (error) {
			console.error(
				'Error connecting to MongoDB database:',
				error.message,
			);
			throw error;
		}
	}
}
