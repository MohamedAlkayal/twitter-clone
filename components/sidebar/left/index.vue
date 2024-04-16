<script setup>
import { HomeIcon } from '@heroicons/vue/20/solid'
import {
    BookmarkIcon,
    DocumentTextIcon,
    EllipsisHorizontalCircleIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    UserIcon,
} from '@heroicons/vue/24/outline'
const { defaultTransition } = useTailwindConfig()
</script>

<template>
    <div class="h-screen flex flex-col gap-6">
        <div
            :class="defaultTransition"
            class="p-2 my-2 rounded-full w-min hover:bg-blue-50 dark:hover:bg-dim-300"
        >
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <TwitterLogo />
                </div>
            </nuxt-link>
        </div>
        <SidebarLeftTab active>
            <template v-slot:icon>
                <HomeIcon />
            </template>
            <template v-slot:name> Home </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <HashtagIcon />
            </template>
            <template v-slot:name> Explore </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <BellIcon />
            </template>
            <template v-slot:name> Notifcations </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <InboxIcon />
            </template>
            <template v-slot:name> Messages </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <BookmarkIcon />
            </template>
            <template v-slot:name> Bookmarks </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <DocumentTextIcon />
            </template>
            <template v-slot:name> Lists </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <UserIcon />
            </template>
            <template v-slot:name> Profile </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <EllipsisHorizontalCircleIcon />
            </template>
            <template v-slot:name> More </template>
        </SidebarLeftTab>
    </div>
</template>
