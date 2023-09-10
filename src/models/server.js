import express from 'express';
import cors from 'cors';

import { userRoutes } from '../routes/user.js';

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      users: '/api/users',
    };

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
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
      console.log('⛱  Servidor corriendo en puerto:', this.port);
    });
  }
}
