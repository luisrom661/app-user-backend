// TODO: implementar los controllers de usuario
import { GetUsersService } from "../application/getUsers.services.js";

export const getUsers = async (req, res) => {
  const getUsersService = new GetUsersService();
  const { limit = 5, from = 0 } = req.query;

  try {
    const result = await getUsersService.execute(Number(limit), Number(from));
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};