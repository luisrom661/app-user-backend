import { UserRepository } from '../../repositories/index.js';

export class DeleteUsersService {
	constructor(userRepository = new UserRepository()) {
		this.userRepository = userRepository;
	}

	async execute(id) {
		const deletedUser = await this.userRepository.deleteUser(id);
		return deletedUser;
	}
}
