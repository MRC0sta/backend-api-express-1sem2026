import {prisma} from "../helpers/dbConnection.js";

/*
const user = {
  name: 'Costa',
  email:  'costa@exasmple.com',
  pass: 'securepassword',
  avatar: 'https://example.com/avatar.png'
}
*/

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
        where: {id}
    });
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        where: {id},
        data: user
    });
}

export const updateAvatarUser = async (avatar, id) => {
    return await prisma.user.update({
        where: {id},
        data: {avatar}
    });
}
