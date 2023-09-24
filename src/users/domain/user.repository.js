//TODO: implementar los repository de usuario
import { User } from '../../adapters/database/mongodb/schemas/index.js';

export class UserRepository {
	async countUsers(query) {
		const count = await User.countDocuments(query);
		return count;
	}

	async getUsers(query, from, limit) {
		const users = await User.find(query).skip(from).limit(limit).exec();
		return users;
	}
}
