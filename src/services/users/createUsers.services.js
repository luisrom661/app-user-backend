import bcryptjs from 'bcryptjs';

import { UserRepository } from '../../repositories/index.js';

export class CreateUsersService {
	constructor(userRepository = new UserRepository()) {
		this.userRepository = userRepository;
	}

	async execute(name, email, password, role) {
		// Encrypt (Hash) the password
		const salt = bcryptjs.genSaltSync();
		const hashedPassword = bcryptjs.hashSync(password, salt);

		const newUser = await this.userRepository.createUser(
			name,
			email,
			hashedPassword,
			role,
		);

		return newUser;
	}
}
