<template>
    <div>
        <label
            :for="label"
            v-if="props.label"
            class="block mb-3 pl-2 text-gray-700 dark:text-gray-100"
            >{{ props.label }}</label
        >
        <div class="mt-1">
            <input
                :id="label"
                :value="props.modelValue"
                @input="
                    (event) => emits('update:modelValue', event?.target?.value)
                "
                class="border block w-full px-4 py-3 border-gray-300 rounded-xl sm:text-sm focus:border-blue-500 outline-none dark:bg-dim-300 dark:text-white"
                :class="twitterBorderColor"
                :type="props.type"
                :placeholder="props.placeholder"
            />
        </div>
    </div>
</template>
<script setup>
const { twitterBorderColor } = useTailwindConfig()

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    label: {
        type: String,
        default: null,
    },
})
</script>
