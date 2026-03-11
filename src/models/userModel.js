import {prisma} from "../helpers/dbConnection.js";

export const createUserModel = async (user) => {
    return await prisma.user.create({
        data: user
    });

}