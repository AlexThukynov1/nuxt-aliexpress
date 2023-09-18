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
                        <div v-for="product in products" :key="product">
                            <!-- <CatrItem/
                                :product="product"
                                :selectedArray="selectedArray"
                                @selectedRadio="SelectedRadioFunc"
                            > -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const products = ref([
  {
    id: 0,
    title: "Title 1",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999,
  },
  {
    id: 1,
    title: "Title 2",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999,
  },
  {
    id: 2,
    title: "Title 3",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999,
  },
  {
    id: 3,
    title: "Title 4",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999,
  },
  {
    id: 4,
    title: "Title 5",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 999,
  }
]);
</script>