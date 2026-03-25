import { updateUser } from '../../models/userModel.js';

export async function updateUserController(req, res){
	const {id} = req.params;
	const {user} = req.body;

	const result = await updateUser(user, +id);

	if (!result)
		return res.status(404).json({ message: `Erro ao atualizar usuário id: ${id}` })

	return res.json({
		message: "Usuário atualizado com sucesso",
		user: result
	})
}