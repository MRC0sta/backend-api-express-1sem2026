import {prisma} from "../helpers/dbConnection.js";

/*
const user = {
  avatar: 'https://example.com/avatar.png',
  name: 'Costa',
  email:  'costa@exasmple.com',
  pass: 'securepassword',
}
*/

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    });

};

export const getPublications = async () => {
    return await prisma.publication.findMany()
};