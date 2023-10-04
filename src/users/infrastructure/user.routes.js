import { Router } from 'express';
import { check } from 'express-validator';

import {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} from '../infrastructure/user.controller.js';
import {
	validateFields,
	validateJWT,
	validateRole,
} from '../../middlewares/index.js';
import {
	isValidRole,
	emailExists,
	existsUserById,
} from '../../helpers/index.js';
import { validateRateLimiter } from '../../middlewares/index.js';

const router = Router();

router.get('/', validateRateLimiter, getUsers);

router.post(
	'/',
	[
		check('name', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'La contraseña debe tener 8 carácteres').isLength({
			min: 8,
		}),
		check('email', 'El correo no es válido').isEmail(),
		check('email').custom(emailExists),
		check('role').custom(isValidRole),
		validateFields,
	],
	createUser,
);

router.put(
	'/:id',
	[
		check('id', 'No es un ID válido').isMongoId().bail(),
		check('id').custom(existsUserById),
		check('role').optional().custom(isValidRole),
		validateFields,
	],
	updateUser,
);

router.delete(
	'/:id',
	[
		validateJWT,
		validateRole('ADMIN_ROLE'),
		check('id', 'No es un ID válido').isMongoId().bail(),
		check('id').custom(existsUserById),
		validateFields,
	],
	deleteUser,
);

export const userRoutes = router;
