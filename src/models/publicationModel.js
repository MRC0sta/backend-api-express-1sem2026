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

export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: {id}
    });
}

export const updatePublication = async (publication, id) => {
    return await prisma.publication.update({
        where: {id},
        data: publication
    });
}