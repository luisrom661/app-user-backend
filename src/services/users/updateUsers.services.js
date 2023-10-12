import bcryptjs from 'bcryptjs';

import { UserRepository } from '../../repositories/index.js';

export class UpdateUsersService {
	constructor(userRepository = new UserRepository()) {
		this.userRepository = userRepository;
	}

	async execute(id, name, email, password, role) {
		// Encrypt (Hash) the password
		if (password) {
			const salt = bcryptjs.genSaltSync();
			password = bcryptjs.hashSync(password, salt);
		}

		const updatedUser = await this.userRepository.updateUser(
			id,
			name,
			email,
			password,
			role,
		);

		return updatedUser;
	}
}
