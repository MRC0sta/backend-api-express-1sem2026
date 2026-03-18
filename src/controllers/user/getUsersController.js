import { getUsers } from "../../models/userModel.js";	

export async function getUsersController(req, res){
	
	const result = await getUsers()

	res.json({ message: "usuarios listados com sucesso", users: result })
}