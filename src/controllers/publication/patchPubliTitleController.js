import { updatePublication, validatePublication } from '../../models/publicationModel.js';

export async function patchPubliTitleController(err, req, res, next) {
	try {
		const { id } = req.params;
		const publication = req.body;

		const { success, error, data } =
			validatePublication({ id: +id, title: publication.title },
				{ description: true, author: true });

		if (!success) {
			return res.status(400).json({ message: "Dados inválidos", errors: error });
		}

		const result = await updatePublication(data, data.id)

		return res.json({
			message: "Titulo atualizado com sucessol",
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
