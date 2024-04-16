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
                            <SidebarLeft
                                :user="user"
                                @on-tweet="handleOpenTweetModal"
                                @on-logout="handleUserLogout"
                            />
                        </div>
                    </div>
                    <!-- main content -->
                    <main
                        class="h-screen col-span-12 md:col-span-8 xl:col-span-8"
                    >
                        <slot></slot>
                    </main>
                    <!-- right sidebar -->
                    <div class="hidden md:block md:col-span-3 xl:col-span-2">
                        <div class="sticky top-0">
                            <SidebarRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
            <TweetForm
                :replyTo="replyTweet"
                showReply
                :user="user"
                @onSuccess="handleFormSuccess"
            />
        </UIModal>
    </div>
</template>

<script setup>
const darkMode = ref(false)
const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth()
const user = useAuthUser()

const {
    closePostTweetModal,
    usePostTweetModal,
    openPostTweetModal,
    useReplyTweet,
} = useTweets()

onBeforeMount(() => {
    initAuth()
})

const emitter = useEmitter()
const postTweetModal = usePostTweetModal()
const replyTweet = useReplyTweet()

emitter.$on('replyTweet', (tweet) => {
    openPostTweetModal(tweet)
})

emitter.$on('toggleDarkMode', () => {
    darkMode.value = !darkMode.value
})

function handleFormSuccess(tweet) {
    closePostTweetModal()

    navigateTo({
        path: `/status/${tweet.id}`,
    })
}

function handleModalClose() {
    closePostTweetModal()
}

function handleOpenTweetModal() {
    openPostTweetModal(null)
}

function handleUserLogout() {
    logout()
}
</script>
