import { deleteUser } from '../../models/userModel.js';

export async function deleteUsersController(req, res) {
	const id = req.params.id;

	const result = await deleteUser(+id); //converte string to int

	if (!result)
		return res.status(404).json({ message: `Erro ao deletar usuário id: ${id}` })

	return res.json({
		message: "Usuário deletado com sucesso",
		user: result
	})
}