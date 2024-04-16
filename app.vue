<template>
    <div :class="{ dark: darkMode }">
        <div class="bg-white dark:bg-dim-900">
            <div class="min-h-full">
                <div
                    class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
                >
                    <!-- left sidebar -->
                    <div class="hidden md:block xs:col-span-1 xl:col-span-2">
                        <div class="sticky top-0">
                            <SidebarLeft />
                        </div>
                    </div>
                    <!-- main content -->
                    <main
                        class="h-screen col-span-12 md:col-span-8 xl:col-span-6"
                    >
                        <nuxt-page />
                    </main>
                    <!-- right sidebar -->
                    <div class="hidden md:block md:col-span-3 xl:col-span-4">
                        <div class="sticky top-0">
                            <SidebarRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const darkMode = ref(false)
</script>
