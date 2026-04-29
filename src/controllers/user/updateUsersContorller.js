import { updateUser, validateUser } from "../../models/userModel.js";

export async function updateUsersController(req, res){
    const {id} = req.params
    const user = req.body

	const { success, data, error } = validateUser({ id: +id, ...user }, { name: true, email: true, pass: true });

	if (!success) {
		return res.status(400).json({ 
			message: "Dados inválidos", 
			fieldErrors: error.flatten 
		});
	}

    const result = await updateUser(user, +id)

    return res.json({
        message: "Usuário atualizado com sucesso!",
        user: result
    })
}