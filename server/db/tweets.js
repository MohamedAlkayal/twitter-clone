import { prisma } from '.'

export const createTweet = async (tweetData) => {
    try {
        const tweet = await prisma.tweet.create({
            data: { ...tweetData },
        })
        return tweet
    } catch (error) {
        console.error('Error creating tweet:', error)
        throw error
    }
}

export const getTweets = (params = {}) => {
    return prisma.tweet.findMany({
        ...params,
    })
}

export const getTweetById = (tweetId, params = {}) => {
    return prisma.tweet.findUnique({
        ...params,
        where: {
            ...params.where,
            id: tweetId,
        },
    })
}
