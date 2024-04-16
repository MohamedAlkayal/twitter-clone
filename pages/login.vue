<template>
    <Head>
        <Title>Login - Twitter</Title>
    </Head>
    <AuthLoginForm />
</template>

<script setup>
definePageMeta({
    layout: 'auth',
    middleware: ['auth'],
})
</script>
