import { response } from 'express';

export const isAdminRole = (req, res = response, next) => {
	if (!req.user) {
		return res.status(500).json({
			msg: 'Attempting to verify the role without validating the token first.',
		});
	}

	const { role, name } = req.user;
	if (role !== 'ADMIN_ROLE') {
		return res.status(401).json({
			msg: `${name} is not an administrator.`,
		});
	}
	next();
};

export const validateRole = (...roles) => {
	return (req, res = response, next) => {
		if (!req.user) {
			return res.status(500).json({
				msg: 'Attempting to verify the role without validating the token first.',
			});
		}
		if (!roles.includes(req.user.role)) {
			return res.status(401).json({
				msg: `The service requires one of these roles: ${roles}`,
			});
		}
		next();
	};
};
