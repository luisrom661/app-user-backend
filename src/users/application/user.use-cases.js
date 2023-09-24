import { response, request } from 'express';
import { User } from '../../adapters/database/mongodb/schemas/index.js';
import bcryptjs from 'bcryptjs';

// const getUsers = async (req = request, res = response) => {
// 	const { limit = 5, from = 0 } = req.query;
// 	const confirmState = { state: true };

// 	if (isNaN(limit) || isNaN(from)) {
// 		res.status(400).json({ error: 'Not a number.' });
// 	}

// 	const [total, users] = await Promise.all([
// 		User.countDocuments(confirmState),
// 		User.find(confirmState).skip(Number(from)).limit(Number(limit)),
// 	]);

// 	res.json({
// 		total,
// 		users,
// 	});
// };

// const updateUser = async (req, res = response) => {
// 	const id = req.params.id;
// 	const { _id, password, google, email, ...rest } = req.body;
// 	if (password) {
// 		// Encrypt (Hash) the password
// 		const salt = bcryptjs.genSaltSync();
// 		rest.password = bcryptjs.hashSync(password, salt);
// 	}

// 	const user = await User.findByIdAndUpdate(id, rest, { new: true });
// 	res.status(201).json(user);
// };

// const createUser = async (req, res = response) => {
// 	const { name, email, password, role } = req.body;
// 	const user = new User({ name, email, password, role });

// 	// Encrypt (Hash) the password
// 	const salt = bcryptjs.genSaltSync();
// 	user.password = bcryptjs.hashSync(password, salt);

// 	// Save to the database
// 	await user.save();

// 	res.status(201).json({
// 		user,
// 	});
// };

const deleteUser = async (req, res = response) => {
	const { id } = req.params;

	// Physically delete
	// const user = await User.findByIdAndDelete(id);

	const user = await User.findByIdAndUpdate(
		id,
		{ state: false },
		{ new: true },
	);

	res.json({
		user,
	});
};

const patchUser = (req, res = response) => {
	res.json({
		msg: 'Patch API - controller',
	});
};

export { /*getUsers,createUser, updateUser,*/ deleteUser, patchUser };
