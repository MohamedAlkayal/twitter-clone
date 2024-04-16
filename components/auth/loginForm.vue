<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="w-16 h-16 mb-12">
                <TwitterLogo />
            </div>
        </div>
        <div class="h-5">
            <p class="text-sm text-center text-red-500">{{ formStatus }}</p>
        </div>
        <div class="pt-5 space-y-6">
            <UIInput
                v-model="data.username"
                label="Username"
                placeholder="@username"
            />

            <UIInput
                label="Password"
                placeholder="********"
                type="password"
                v-model="data.password"
            />

            <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled">
                Login
            </UIButton>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const data = reactive({
    username: '',
    password: '',
    loading: false,
})

const formStatus = ref('')

async function handleLogin() {
    const { login } = useAuth()

    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password,
        })
        router.push('/')
    } catch (error) {
        console.log(error)
        formStatus.value = 'Somthing went wrong'
    } finally {
        data.loading = false
    }
}

const isButtonDisabled = computed(() => {
    return !data.username || !data.password || data.loading
})
</script>
