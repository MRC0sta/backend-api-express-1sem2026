import { deletePublication } from '../../models/publicationModel.js';

export async function deletePubliController(req, res) {
	const id = req.params.id;

	const result = await deletePublication(+id); //converte string to int

	if (!result)
		return res.status(404).json({ message: `Erro ao deletar usuário id: ${id}` })

	return res.json({
		message: "Publicação deletada com sucesso",
		publication: result
	})
}