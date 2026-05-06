import { deletePublication, validatePublication } from '../../models/publicationModel.js';

export async function deletePubliController(req, res) {
	const id = req.params.id;

	const { success, error, data } = validatePublication({ id: +id }, { title: true, description: true, authorId: true });

	if (!success) {
		return res.status(400).json({ message: "Dados inválidos", errors: error.flatten().fieldErrors });
	}

	const result = await deletePublication(data.id); //converte string to int

	if (!result)
		return res.status(404).json({ message: `Erro ao deletar usuário id: ${id}` })

	return res.json({
		message: "Publicação deletada com sucesso",
		publication: result
	})
}