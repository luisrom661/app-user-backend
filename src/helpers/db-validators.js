import { Role, User } from '../adapters/database/mongodb/schemas/index.js';

export const isValidRole = async (role = '') => {
	const roleExists = await Role.findOne({ role });
	if (!roleExists) {
		throw new Error(`The role ${role} is not registered in the database.`);
	}
};

export const emailExists = async (email = '') => {
	// Check if the email exists
	const emailExists = await User.findOne({ email });
	if (emailExists) {
		throw new Error(`The email: ${email} is already registered.`);
	}
};

export const existsUserById = async (id) => {
	const userExists = await User.findById(id);
	if (!userExists) {
		throw new Error(`The ID does not exist: ${id}`);
	}
};

export const allowedCollections = (collection = '', collections = []) => {
	const collectionIncluded = collections.includes(collection);
	if (!collectionIncluded) {
		throw new Error(
			`The collection ${collection} is not allowed: ${collections}`,
		);
	}

	return true;
};
