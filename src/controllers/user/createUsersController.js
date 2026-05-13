import { createUser, validateUser  } from "../../models/userModel.js"

export async function createUsersController(error, req, res, next){
    try {
    const user = req.body

    const {success, error, data} = validateUser(user, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await createUser(data)

    return res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })

    } catch (error) {

        if(error.code === 'P2002' && error.message.includes("email")){
            return res.status(400).json({
                message: "Email já cadastrado",
                fieldErrors: {
                    email: ["Email já cadastrado"]
                }
            })
        }

        next(error)
    
    }

    
}