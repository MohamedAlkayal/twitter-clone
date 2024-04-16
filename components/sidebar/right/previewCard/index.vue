<script setup>
const { defaultTransition, twitterBorderColor } = useTailwindConfig()

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div
        class="m-2 border overflow-hidden w-full rounded-2xl bg-gray-50 dark:bg-dim-700"
        :class="twitterBorderColor"
    >
        <h1
            class="p-3 text-xl font-bold text-gray-900 border-b dark:text-white"
            :class="twitterBorderColor"
        >
            {{ props.title }}
        </h1>

        <slot></slot>

        <div
            class="cursor-pointer p-3 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dim-900"
            :class="defaultTransition"
        >
            Show more
        </div>
    </div>
</template>
