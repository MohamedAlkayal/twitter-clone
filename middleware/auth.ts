export default defineNuxtRouteMiddleware((to, from) => {
    const { useAuthUser } = useAuth()
    // const user = useAuthUser()
    // if (to.name == 'index' && !user) {
    //     console.log('test')
    //     return navigateTo('/login')
    // }
    // if (to.name == 'login' && user) {
    //     console.log('test')

    //     return navigateTo('/')
    // }
})
