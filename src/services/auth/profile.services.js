import { AuthRepository } from '../../repositories/index.js';

export class ProfileService {
	constructor(authRepository = new AuthRepository()) {
		this.authRepository = authRepository;
	}

	async execute(email) {
		const user = await this.authRepository.profile(email);

		if (!user) throw new 'Usuario / Contraseña no son correctos. -correo'();
		if (!user.state)
			//throw new 'Usuario / Contraseña no son correctos. -estado'();
		return user;
	}
}
