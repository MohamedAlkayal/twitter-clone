<template>
    <div
        :class="twitterBorderColor"
        class="sticky top-0 p-6 border-x border-b bg-white/80 backdrop-blur-md dark:bg-dim-900/80"
    >
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {{ props.title }}
        </h1>
    </div>
</template>
<script setup>
const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>
