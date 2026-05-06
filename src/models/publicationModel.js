import { createValidator } from "../helpers/createValidator.js";
import { prisma } from "../helpers/dbConnection.js";
import * as z from 'zod';

/*
const user = {
  avatar: 'https://example.com/avatar.png',
  name: 'Costa',
  email:  'costa@exasmple.com',
  pass: 'securepassword',
}
*/

const publicationSchema = z.object({
    id: z.int("Id é obrigatório e deve ser um valor numérico")
        .positive("Id deve ser um valor numérico positivo"),
    title: z.string("Titulo deve ser uma string")
        .min(3, "Titulo deve ter no minimo 3 caracteres")
        .max(200, "Titulo deve ter no máximo 200 caracteres"),
    description: z.string("Descricao deve ser uma string")
        .min(3, "Descricao deve ter no minimo 3 caracteres")
        .max(10000, "Descricao deve ter no maximo 10000 caracteres"),
    author: z.string("Autor deve ser uma string")
        .min(3, "Autor deve ter no minimo 3 caracteres")
        .max(255, "Autor deve ter no maximo 255 caracteres")
});

export const validatePublication = createValidator(publicationSchema);

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    });

};

export const getPublications = async () => {
    return await prisma.publication.findMany()
};

export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: { id }
    });
}

export const updatePublication = async (publication, id) => {
    return await prisma.publication.update({
        where: { id },
        data: publication
    });
}