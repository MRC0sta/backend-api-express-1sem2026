import { createPublication } from "../../models/publicationModel.js"

export async function createPubliController(req, res){

    const publication = req.body

console.log(publication);

    const result = await createPublication(publication)

    res.json({
        message: "Publicação criada com sucesso!",
        publication: result
    })
}
