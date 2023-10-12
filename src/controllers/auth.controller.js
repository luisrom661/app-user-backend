import { response } from 'express';
import { LoginService } from '../services/index.js';

export const login = async (req, res = response) => {
	const { email, password } = req.body;
	const loginService = new LoginService();

	try {
		const { user, token } = await loginService.execute(email, password);
		res.json({ user, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const googleSignIn = async (req, res) => {};
