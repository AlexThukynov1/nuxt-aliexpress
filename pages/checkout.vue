<template>
    <div id="checkoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[65%]">
                <div class="bg-white rounded-lg p-4">
                    <div class="text-xl font-semibold mb-2">Shipping Address</div>
                    <div v-if="false">
                        <nuxt-link 
                            to="/address"
                            class="flex items-center pb-2 text-blue-500 hover:text-red-400"
                        >
                            <Icon name="mdi:plus" size="18" class="mr-2"/>
                            Update Address
                        </nuxt-link>

                        <div class="pt-2 border-t">
                            <div class="underline pb-1">Delivery Address</div>
                            <ul class="text-xs">
                                <li class="flex items-center gap-2">
                                    <div>Contact name:</div>
                                    <div class="font-bold">Test</div>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div>Address:</div>
                                    <div class="font-bold">Test</div>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div>Zip Code:</div>
                                    <div class="font-bold">Test</div>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div>City:</div>
                                    <div class="font-bold">Test</div>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div>Country:</div>
                                    <div class="font-bold">Test</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nuxt-link 
                        v-else 
                        to="/address"
                        class="flex items-center text-blue-500 hover:text-red-400"
                    >
                    <Icon name="mdi:plus" size="18" class="mr-2"/>
                    Add New Address
                    </nuxt-link>
                </div>
                <div id="items" class="bg-white rounded-lg p-4 mt-4">
                    <div v-for="product in products" :key="product">
                        <CheckoutItem :product="product"/>
                    </div>
                </div>
            </div>
            <div class="block my-4 md:hidden"></div>
            <div class="md:w-[35%]">
                <div id="placeOrder" class="bg-white rounded-lg p-4">
                    <div class="text-2xl font-extrabold md-2">Summary</div>
                    <div class="flex items-center justify-between my-4">
                        <div>Total Shipping</div>
                        <div>Free</div>
                    </div>
                    <div class="border-t"></div>
                    <div class="flex items-center justify-between my-4">
                        <div class="font-semibold">Total</div>
                        <div class="text-2xl font-semibold">
                            <span class="font-extrabold">{{ total / 100 }}</span>
                        </div>
                    </div>
                    <form @submit.prevent="pay()">
                        <div class="border border-gray-500 p-2 rounded-sm"></div>
                        <p id="card-error" class="text-red-700 text-center font-semibold" role="alert"></p>
                        <button 
                            :disabled="isProcessing"
                            type="submit"
                            class="mt-4 w-full text-white font-semibold p-1.5 rounded-full bg-gradient-to-r from-[#fe630c] to-[#ff3200] text-[21px]"
                            :class="isProcessing ? 'opacity-70' : 'opacity-100'"
                        >
                            <Icon v-if="isProcessing" name="eos-icons:loading"/>
                            <div v-else>Place order</div>
                        </button>
                    </form>
                </div>
                <div class="bg-white rounded-lg p-4 mt-4">
                    <div class="text-lg font-semibold mb-2 mt-2">AliExpress</div>
                    <p class="my-2">
                        AliExpress keeps your information and payment safe
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const route = useRoute()

let stripe = null,
    elements = null,
    card = null,
    form = null,
    total = ref(0),
    clientSecret = null,
    currentAddress = ref(null),
    isProcessing = ref(true);

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

onMounted(() => {
    isProcessing.value = true
    useStorage.checkout.forEach(item => {
        total.value += item.price
    })
})

watch(() => total.value, () => {
    stripeInit()
})

const stripeInit = async () => {

}

const pay = async () => {

}

const createOrder = async (stripeId) => {

}

const showError = (errorMsgText) => {

}
</script>