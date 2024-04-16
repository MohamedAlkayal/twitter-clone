<script setup>
const { defaultTransition } = useTailwindConfig();

const textClasses = computed(() => (props.active ? "font-semibold" : "font-normal"));
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <nuxt-link to="#" class="flex items-center gap-3 p-3 w-min xl:w-full rounded-full text-black hover:bg-gray-200 dark:hover:bg-dim-300 dark:text-white" :class="defaultTransition">
    <div class="w-7 h-7 text-dark">
      <slot name="icon"></slot>
    </div>
    <div class="text-xl hidden xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>
