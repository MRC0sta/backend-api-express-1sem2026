import { prisma } from "../helpers/dbConnection.js";
import * as z from 'zod';

/*
const user = {
  name: 'Costa',
  email:  'costa@exasmple.com',
  pass: 'securepassword',
  avatar: 'https://example.com/avatar.png'
}
*/

const userSchema = z.object({
    id: z.int("Id é obrigatório e deve ser um valor numérico")
        .positive("Id deve ser um valor positivo"),
    avatar: z.string()
        .url("Avatar deve ser uma URL válida")
        .max(500, "Avatar deve ter no máximo 500 caracteres"),
    name: z.string()
        .min(3, "Nome deve ter pelo menos 3 caracteres")
        .max(255, "Nome deve ter no máximo 255 caracteres"),
    email: z.string()
        .email("Email inválido"),
    pass: z.string()
        .min(6, "Senha deve ter pelo menos 6 caracteres")
        .max(255, "Senha deve ter no máximo 255 caracteres"),
});

export const validateUser = (user, partial = false) => {
    if (partial) {
        return userSchema.partial({ partial }).safeParse(user);
    }
    return userSchema.safeParse(user);
}

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    });
};

export const getUsers = async () => {
    return await prisma.user.findMany()
};

export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: { id }
    });
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        where: { id },
        data: user
    });
}

export const updateAvatarUser = async (avatar, id) => {
    return await prisma.user.update({
        where: { id },
        data: { avatar }
    });
}
