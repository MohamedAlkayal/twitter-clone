import { prisma } from '.'
import bcrypt from 'bcrypt'

export const createUser = async (userData) => {
    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 4),
    }

    return prisma.user.create({
        data: finalUserData,
    })
}

export const getUserByUsername = (username) => {
    return prisma.user.findUnique({
        where: {
            username,
        },
    })
}

export const getUserById = (userId) => {
    return prisma.user.findUnique({
        where: {
            id: userId,
        },
    })
}
