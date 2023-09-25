<template>
    <div id="authPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-xenter justify-center p-5 border-b border-b-gray-300">
            <nuxt-link
                to="/"
                class="min-w-[170px]"
            >
                <img width="170" src="/AliExpress-logo.png" alt=""/>
            </nuxt-link>
        </div>
        <div class="max-w-[400px] mx-auto px-2">
            <div class="text-center my-6">Login / Register</div>
            <button
                @click="login('google')"
                class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
            >
                <img src="/google-logo.png" alt="" class="w-full max-w-[30px]">
                <div>Google</div>
            </button>
            <button
                @click="login('github')"
                class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold mt-4"
            >
                <img src="/github-logo.png" alt="" class="w-full max-w-[30px]"/>
                <div>Github</div>
            </button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

// const client = useSupabaseClient()
// const user = useSupabaseUser()

// watchEffect(() => {
//     if (UserActivation.value) {
//         return navigateTo('/')
//     }
// })

const login = async (provider) => {
    const  {data, error} = await client.auth.signInWithOAuth({
        provider
    })
}
</script>