import express from 'express';
import cors from 'cors';

import { userRoutes } from '../routes/user.js';
import { dbConnection } from '../db/db.js';

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? 3000;
    this.paths = {
      users: '/api/users',
    };

    // Middlewares
    this.middlewares();

    // Conexion a la base de datos
    this.conectarDB();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
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
