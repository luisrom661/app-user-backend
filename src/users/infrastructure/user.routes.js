import { Router } from 'express';
import { check } from 'express-validator';

import { getUsers } from '../infrastructure/user.controller.js';
import { updateUser, createUser, deleteUser } from '../application/user.use-cases.js';
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

const router = Router();

//TODO: Implementar rutas de usuario
router.get('/', getUsers);

router.post(
	'/',
	[
		check('name', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'La contraseña debe tener 8 letras').isLength({
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
