//TODO: Implementar el servicio de eliminar usuarios
import { UserRepository } from '../domain/user.repository.js';

export class DeleteUsersService {
	constructor(userRepository = new UserRepository()) {
		this.userRepository = userRepository;
	}

	async execute(id) {
		const deletedUser = await this.userRepository.deleteUser(id);
		return deletedUser;
	}
}
