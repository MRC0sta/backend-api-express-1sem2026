import { createUser } from "../../models/userModel.js"

export async function createUsersController(req, res) {

	const user = {
		avatar: "https://github.com/MRC0sta.png",
		name: "Matheus Costa",
		email: "matheusrc0107@gmail.com",
		pass: "12345678"
	};

	const result = await createUser(user)

	res.json({
		message: "Usuário criado com sucesso!",
		user: result
	})
}