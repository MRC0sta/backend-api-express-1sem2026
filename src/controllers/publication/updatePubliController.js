import { updatePublication } from '../../models/publicationModel.js';

export async function updatePubliController(req, res){
	const {id} = req.params;
	const {publication} = req.body;

	const result = await updatePublication(publication, +id);

	if (!result)
		return res.status(404).json({ message: `Erro ao atualizar publicação id: ${id}` })

	return res.json({
		message: "Publicação atualizada com sucesso",
		publication: result
	})
}

