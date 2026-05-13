import { createPublication, validatePublication } from "../../models/publicationModel.js"

export async function createPubliController(error, req, res, next) {
    try {
        const publication = req.body
        const { success, error, data } = validatePublication(publication, { id: true });

        if (!success) {
            return res.status(400).json({ message: "Dados inválidos", errors: error.flatten().fieldErrors });
        }

        const result = await createPublication(data)

        res.json({
            message: "Publicação criada com sucesso!",
            publication: result
        })
    } catch (error) {
        if (error.code === 'P2002' && error.message.includes("title")) {
            return res.status(400).json({
                message: "Título já cadastrado",
                fieldErrors: {
                    title: ["Título já cadastrado"]
                }
            })
        }
        next(error)
    };
}