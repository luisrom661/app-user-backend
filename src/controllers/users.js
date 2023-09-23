//TODO: Implementar la clase UserController
//import { response, request } from 'express'
import { dbConnection } from '../db/db.js';

export const getUsers = async (req, res) => {
      try {
        const client = await dbConnection();
        const query = 'SELECT * FROM users';
        const result = await client.query(query);

        res.json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}
