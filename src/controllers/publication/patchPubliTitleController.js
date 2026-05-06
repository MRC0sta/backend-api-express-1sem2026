import { updatePublication, validatePublication } from '../../models/publicationModel.js';

export async function patchPubliTitleController(req, res) {
	const id = req.params.id;
	const { title } = req.body;

	const { success, error, data } = validatePublication({ id: +id, title: publication.title }, { description: true, author: true });
	if (!success) {
		return res.status(400).json({ message: "Dados inválidos", errors: error });
	}

	const result = await updatePublication(data, data.id)

	return res.json({
		message: "Titulo atualizado com sucessol",
		publication: result
	})
}
