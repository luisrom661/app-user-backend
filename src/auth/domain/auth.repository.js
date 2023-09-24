import { User } from '../../adapters/database/mongodb/schemas/index.js';

export class AuthRepository {
	async login(email) {
		const user = await User.findOne({ email });
		return user;
	}
	async googleSignIn(email) {
		let user = await User.findOne({ email });
		return user;
	}
}
