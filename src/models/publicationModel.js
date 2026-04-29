import {prisma} from "../helpers/dbConnection.js";
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
    id: z.int().positive(),
    title: z.string().min(3).max(255),
    content: z.string().min(3),
    authorId: z.number().positive()
});

export const validatePublication = (publication, partial = false) => {
    if (partial) {
        return publicationSchema.partial({partial}).safeParse(publication);
    }
    return publicationSchema.safeParse(publication);
};

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