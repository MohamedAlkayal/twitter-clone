<script setup>
const { defaultTransition } = useTailwindConfig()
const whatsHappeningItems = reactive([
    {
        title: 'SpaceX',
        count: '18.8K tweets',
    },
    {
        title: '#VueWins',
        count: '8.5K tweets',
    },
    {
        title: '#CodeWithKeko',
        count: '143.6K tweets',
    },
])
const whoToFollowItems = reactive([
    {
        name: 'Jhon Doe',
        handle: '@jhondoe',
        image: 'https://picsum.photos/200/200',
    },
    {
        name: 'Ahmed Alfy',
        handle: '@ahmadalfy',
        image: 'https://picsum.photos/200/200',
    },
    {
        name: 'Evan You',
        handle: '@youyuxi',
        image: 'https://picsum.photos/200/200',
    },
])
</script>

<template>
    <div class="fixed top-0 my-4 w-1/5 flex flex-col">
        <!-- Preview Card: Whats happening -->
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem
                v-for="whatsHappening in whatsHappeningItems"
            >
                <div class="cursor-pointer">
                    <p
                        class="font-bold mb-2 text-gray-800 text-md dark:text-gray-100"
                    >
                        {{ whatsHappening.title }}
                    </p>
                    <p class="text-xs text-gray-600 dark:text-gray-300">
                        {{ whatsHappening.count }}
                    </p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <!-- Preview Card: Who to follow -->
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem
                v-for="whoToFollow in whoToFollowItems"
            >
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="cursor-pointer flex items-center gap-4">
                        <img
                            class="w-12 h-12 rounded-full"
                            :src="whoToFollow.image"
                            :alt="`${whoToFollow.name} Profile Picture`"
                        />
                        <div class="flex flex-col">
                            <p
                                class="font-semibold text-sm dark:text-gray-100 mb-2"
                            >
                                {{ whoToFollow.name }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-300">
                                {{ whoToFollow.handle }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center h-full">
                        <button
                            class="px-4 py-2 rounded-full font-bold text-xs text-white bg-black dark:text-black dark:bg-white"
                        >
                            Follow
                        </button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
    </div>
</template>
