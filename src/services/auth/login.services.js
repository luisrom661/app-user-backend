import bcryptjs from 'bcryptjs';

import { AuthRepository } from '../../repositories/index.js';
import { generateJWT } from '../../helpers/index.js';

export class LoginService {
	constructor(authRepository = new AuthRepository()) {
		this.authRepository = authRepository;
	}

	async execute(email, password) {
		const user = await this.authRepository.login(email);
		if (!user) throw new 'Usuario / Contraseña no son correctos. -correo'();
		if (!user.state)
			throw new 'Usuario / Contraseña no son correctos. -estado'();

		const validatePassword = bcryptjs.compareSync(password, user.password);
		if (!validatePassword)
			throw new 'Usuario / Contraseña no son correctos. -contraseña'();

		const token = await generateJWT(user.id);
		return { user, token };
	}
}
