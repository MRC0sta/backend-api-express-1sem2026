import { deleteUser, validateUser } from '../../models/userModel.js';

export async function deleteUsersController(req, res) {
	const id = req.params.id;

	const { success, data, error } = validateUser({ id: +id }, { name: true, avatar: true, email: true, pass: true });

	if (!success) {
		return res.status(400).json({ 
			message: "Dados inválidos", 
			fieldErrors: error.flatten 
		});
	}

	const result = await deleteUser(data.id); 

	if (!result)
		return res.status(404).json({ message: `Erro ao deletar usuário id: ${id}` })

	return res.json({
		message: "Usuário deletado com sucesso",
		user: result
	})
}