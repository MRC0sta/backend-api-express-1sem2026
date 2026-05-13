import { updatePublication } from '../../models/publicationModel.js';

export async function updatePubliController(err, req, res, next) {
	try {
		const { id } = req.params;
		const publication = req.body;
		publication.id = +id;

	const { success, error, data: publicationValidated } = validatePublication(publication)

	if (!success) {
		return res.status(400).json({
			message: "Erro de validação",
			fieldErrors: error
		})
	}

	const result = await updatePublication(publicationValidated, publicationValidated.id)

	return res.json({
		message: "Publicação atualizada com sucesso!",
		publication: result
	})
	} catch (error) {
		if (error.code === 'P2025') {
			return res.status(404).json({
				message: "Publicação não encontrada para ser atualizada"
			})
		}
		next(error)
	}
}