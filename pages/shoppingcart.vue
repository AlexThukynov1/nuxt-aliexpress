<template>
    <div id="ShopingCart" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div v-if="false" class="h-[500px] flex items-center justify-center">
            <div class="pt-20">
                <img 
                    class="mx-auto"
                    width="250"
                    src="/cart-empty.png" 
                    alt=""
                />
                <div class="text-xl text-center mt-4">No items yet</div>

                <div v-if="true" class="flex text-center">
                    <NuxtLink
                        to="/auth"
                        class="bg-[#fd374f] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
                    >
                        Sign In
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[65%]">
                <div class="bg-white rounded-lg p-4">
                    <div class="text-2xl font-bold mb-2">
                        Shoping Cart (0)
                    </div>
                </div>
                <div class="bg-[#feeeef] rounded-lg p-4 mt-4">
                    <div class="text-red-500 font-bold">Welcome deal applicable on 1 item only</div>
                    <div class="bg-white rounded-lg p-4 mt-4">
                        <div v-for="(product, index) in products" :key="index">
                            <CartItem
                                :product="product"
                                :selectedArray="selectedArray"
                                @selectedRadio="SelectedRadioFunc"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:hidden block my-4"></div>
            <div class="md:w-[35%]">
                <div class="ng-white rounded-lg p-4">
                    <div class="text-2xl font-extrabold mb-2">Summary</div>
                    <div class="flex items-center justify-between my-4">
                        <div class="font-semibold">Total</div>
                        <div class="text-2xl font-semibold">
                            $ <span class="font-semibold">{{ totalPriceComputed }}</span>
                        </div>
                    </div>
                    <button
                        @click="goToCheckout"
                        class="flex items-center justify-center bg-[#fd374f] w-full text-white text-[21px] font-semiboold p-1.5 rounded-full mt-4"
                    >
                        Checkout
                    </button>
                </div>
                <div class="bg-white rounded-lg p-4 mt-4">
                    <div class="text-lg font-semibold mb-2">Payment methods</div>
                    <div class="flex items-center justify-start gap-8 my-4">
                        <div v-for="card in cards" :key="card">
                            <img class="h-6" :src="card" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

const SelectedRadioFunc = (e) => {
    if(!selectedArray.value.length) {
        selectedArray.value.push(e)
        return
    }

    selectedArray.value.forEach((item, index) => {
        if(e.id != item.id) {
            selectedArray.value.push(e)
        } else {
            selectedArray.value.splice(index, 1)
        }
    })
}
let selectedArray = ref([])

const goToCheckout = () => {
    // let ids = []
    // userStore.checkout = []
    // selectedArray.forEach( item => ids.push(item.id))
    // let res = userStore.cart.filter((item) => {
    //     return ids.indexOf(item.id) != -1
    // })

    // res.forEach(item => userStore.checkout.push(toRaw(item)))

    return navigateTo('/checkout')
}

onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 200)
})

const cards = ref([
    'visa.png',
    'mastercard.png',
    'paypal.png',
    'applepay.png'
])

const totalPriceComputed = computed(() => {
    let price = 0
    userStore.cart.forEach(prod => {
        price += prod.price
    })
    return price / 100
})

const products = ref([
  {
    id: 0,
    title: "Title 1",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 99,
  },
  {
    id: 1,
    title: "Title 2",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 991,
  },
  {
    id: 2,
    title: "Title 3",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 185,
  },
  {
    id: 3,
    title: "Title 4",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 10,
  },
  {
    id: 4,
    title: "Title 5",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 1.95,
  }
]);
</script>