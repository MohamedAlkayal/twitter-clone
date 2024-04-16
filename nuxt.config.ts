export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
        cloudinaryCloudName: process.env.CLOUDINARRY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARRY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARRY_API_SECRET,
    },
})
