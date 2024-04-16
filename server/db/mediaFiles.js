import { prisma } from '.'

export const createMediaFile = (mediaFile) => {
    console.log(mediaFile)
    return prisma.mediaFile.create({
        data: mediaFile,
    })
}
