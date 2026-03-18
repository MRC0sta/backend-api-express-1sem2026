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