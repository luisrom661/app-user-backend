import { UserRepository } from '../domain/user.repository.js';

export class GetUsersService {
	constructor(userRepository = new UserRepository()) {
		this.userRepository = userRepository;
	}

	async execute(limit = 0, from = 0) {
		const confirmState = { state: true };

		if (isNaN(limit) || isNaN(from)) {
			throw new Error('Not a number.');
		}

		const [total, users] = await Promise.all([
			this.userRepository.countUsers(confirmState),
			this.userRepository.getUsers(confirmState, from, limit),
		]);

		return { total, users };
	}
}