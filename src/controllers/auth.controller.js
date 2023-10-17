import { response } from 'express';
import { LoginService, ProfileService } from '../services/index.js';

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

export const profile = async (req, res) => {
	const { email } = req.body;
	const profileService = new ProfileService();

	try {
		const user = await profileService.execute(email);
		res.json({user});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
