import express from 'express';
import cors from 'cors';

import { userRoutes } from './users/infrastructure/user.routes.js';
import { config } from './config/config.js';
import DbConnection from './adapters/database/mongodb/mongodb.js';

export class Server {
	constructor() {
		this.app = express();
		this.port = config.port ?? 3001;
		this.paths = {
			users: '/api/users',
		};

		// Middlewares
		this.middlewares();

		// Crear una instancia de la clase DbConnection
		this.db = new DbConnection();

		// Conexion a la base de datos
		this.conectarDB();

		// Rutas de mi aplicación
		this.routes();
	}

	async conectarDB() {
		try {
			await this.db.connect(); // Utiliza el método connect de la instancia db
		} catch (error) {
			console.error('Error connecting to the database:', error);
			process.exit(1); // Opcional: Si la conexión falla, puedes salir de la aplicación.
		}
	}

	middlewares() {
		// CORS
		this.app.use(cors());

		// Lectura y parseo del body
		this.app.use(express.json());

		// Directorio público
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.paths.users, userRoutes);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('⛱  Server is running on port:', this.port);
		});
	}
}
