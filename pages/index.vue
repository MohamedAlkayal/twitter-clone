<template>
    <PageTitle title="Home" />
    {{ user }}
</template>

<script setup>
definePageMeta({
    middleware: ['auth'],
})
const { useAuthUser } = useAuth()
const user = useAuthUser()
</script>
