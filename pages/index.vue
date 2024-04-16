<template>
    <Head>
        <Title>Home - Twitter</Title>
    </Head>

    <div>
        <PageTitle title="Home" />
        <div
            v-if="!isAuthLoading && !loading"
            class="border-x min-h-screen pb-[100px]"
            :class="twitterBorderColor"
        >
            <TweetForm :user="user" @on-success="handleFormSuccess" />
            <ListFeed :tweets="homeTweets" />
        </div>
        <div v-else class="flex items-center justify-center p-8">
            <UISpinner />
        </div>
    </div>
</template>

<script setup>
import ListFeed from '~/components/Tweet/ListFeed.vue'

const { twitterBorderColor } = useTailwindConfig()
const { getTweets } = useTweets()

definePageMeta({
    middleware: ['auth'],
})
const { useAuthUser, useAuthLoading, initAuth } = useAuth()
const isAuthLoading = useAuthLoading()
const user = useAuthUser()

const homeTweets = ref([])
const loading = ref(false)

onMounted(async () => {
    await initAuth()
    loading.value = true
    try {
        const { tweets } = await getTweets()
        homeTweets.value = tweets
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
})

function handleFormSuccess(tweet) {
    navigateTo({
        path: `/status/${tweet.id}`,
    })
}
</script>
