<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const { initAuth } = useAuth()
onBeforeMount(() => {
    initAuth()
})
</script>
