<template>
    <Head>
        <Title> {{ user.username || 'tweet' }} - Twitter</Title>
    </Head>

    <div>
        <PageTitle title="Tweet" />
        <div
            v-if="!isAuthLoading && !loading"
            class="border-x min-h-screen pb-[140px]"
            :class="twitterBorderColor"
        >
            <div v-if="tweet">
                <TweetItem :tweet="tweet" />
                <TweetForm
                    placeholder="Tweet your reply"
                    :reply-to="tweet"
                    :user="user"
                    @on-success="handleFormSuccess"
                />
                <TweetListFeed :tweets="replies" />
            </div>
            <div class="" v-else>Somthing went wrong</div>
        </div>
        <div v-else class="flex items-center justify-center p-8">
            <UISpinner />
        </div>
    </div>
</template>
<script setup>
const { twitterBorderColor } = useTailwindConfig()
const { useAuthUser, useAuthLoading, initAuth } = useAuth()
const isAuthLoading = useAuthLoading()
const user = useAuthUser()

const tweet = ref(null)
const loading = ref(false)
const replies = computed(() => tweet.value?.replies || [])

const { getTweetById } = useTweets()
const route = useRoute()

async function getTweet() {
    loading.value = true
    try {
        const response = await getTweetById(route.params.id)
        tweet.value = response.tweet
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}

function handleFormSuccess(tweet) {
    navigateTo({
        path: `/status/${tweet.id}`,
    })
}

onMounted(async () => {
    await initAuth()
    getTweet()
})
</script>
