// TODO: implementar los controllers de usuario
import { GetUsersService, CreateUsersService } from '../application/index.js';

export const getUsers = async (req, res) => {
	const getUsersService = new GetUsersService();
	const { limit = 5, from = 0 } = req.query;

	try {
		const result = await getUsersService.execute(
			Number(limit),
			Number(from),
		);
		res.json(result);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const createUser = async (req, res) => {
	const { name, email, password, role } = req.body;
	const createUsersService = new CreateUsersService();

	try {
		const newUser = await createUsersService.execute(
			name,
			email,
			password,
			role,
		);
		res.status(201).json({
			user: newUser,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
