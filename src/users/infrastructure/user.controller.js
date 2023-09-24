// TODO: implementar los controllers de usuario
import {
	GetUsersService,
	CreateUsersService,
	UpdateUsersService,
	DeleteUsersService,
} from '../application/index.js';

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
		res.status(201).json({user: newUser});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		const { password, ...rest } = req.body;

		const updateUsersService = new UpdateUsersService();
		const updatedUser = await updateUsersService.execute(
			id,
			rest.name,
			rest.email,
			password,
			rest.role,
		);
		res.status(200).json({user: updatedUser});
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteUsersService = new DeleteUsersService();
		const deletedUser = await deleteUsersService.execute(id);
		res.status(200).json({user: deletedUser});
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};