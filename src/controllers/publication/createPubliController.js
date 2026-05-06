import { createPublication, validatePublication } from "../../models/publicationModel.js"

export async function createPubliController(req, res){

    const publication = req.body
    const { success, error, data } = validatePublication(publication, { id: true }  );

    if (error) {
        return res.status(400).json({ message: "Dados inválidos", errors: error.flatten().fieldErrors });
    }

console.log(publication);

    const result = await createPublication(publication)

    res.json({
        message: "Publicação criada com sucesso!",
        publication: result
    })
}
