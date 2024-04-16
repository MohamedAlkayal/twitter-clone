import { sendError } from 'h3'
import { createUser } from '../../db/users.js'
import { userTransformer } from '~/server/transformers/user.js'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { username, name, email, password } = body

    if (!username || !name || !email || !password) {
        return sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: 'Invalid params',
            })
        )
    }

    const userData = {
        username,
        name,
        email,
        password,
        profileImage: 'https://picsum.photos/200/200',
    }

    const user = await createUser(userData)

    return {
        body: userTransformer(user),
    }
})
