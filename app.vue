<template>
    <div :class="{ dark: darkMode }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
const darkMode = ref(false)
const { initAuth } = useAuth()

onBeforeMount(() => {
    initAuth()
})
</script>
