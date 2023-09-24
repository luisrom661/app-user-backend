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

	async createUser(name, email, password, role) {
		const newUser = new User({ name, email, password, role });
		await newUser.save();
		return newUser;
	}

	async updateUser(id, name, email, password, role) {
		const updateFields = {
			name,
			email,
			password,
			role,
		};
		const updatedUser = await User.findByIdAndUpdate(id, updateFields, {
			new: true,
		});
		return updatedUser;
	}

	async deleteUser(id) {
		// Physically delete
		// const deletedUser = await User.findByIdAndDelete(id);
		const deletedUser = await User.findByIdAndUpdate(
			id,
			{ state: false },
			{ new: true },
		);
		return deletedUser;
	}
}
