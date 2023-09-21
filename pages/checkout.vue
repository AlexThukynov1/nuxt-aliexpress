<template>
    <div id="checkoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[65%]">
                <div class="bg-white rounded-lg p-4">
                    <div class="text-xl font-semibold mb-2">Shipping Address</div>
                    <div v-if="true">
                        <nuxt-link 
                            to="/address"
                            class="flex items-center pb-2 text-blue-500 hover:text-red-400"
                        >
                            <Icon name="mdi:plus" size="18" class="mr-2"/>
                            Update Address
                        </nuxt-link>
                    </div>
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
    isProcessing = ref(false);

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