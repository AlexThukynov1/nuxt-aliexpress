<template>
  <div id="OtLayout" class="w-full mx-auto my-0 fixed z-50">
    <div id="TopMenu" class="w-full bg-[#fafafa] border-b md:block hidden">
      <ul
        class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#fafafa] max-w-[1200px]"
      >
        <li
          class="boder-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer"
        >
          Sell on AliExpress
        </li>
        <li
          class="boder-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer"
        >
          Cookie Preferences
        </li>
        <li
          class="boder-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer"
        >
          Help
        </li>
        <li
          class="boder-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer"
        >
          Buyer Protection
        </li>
        <li class="px-3 hover:text-[#ff4646] cursor-pointer">
          <Icon name="ic:sharp-install-mobile" size="17" />
          App
        </li>
        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative flex items-center px-2.5 hover:text-[#ff4646] h-full cusror-pointer"
          :class="
            isAccountMenu
              ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
              : 'border border-[#fafafa]'
          "
        >
          <icon name="ph:user-thin" size="17" />
          Account
          <Icon name="mdi:chevron-down" size="15" class="ml-5" />
          <div
            id="AccountMenu"
            v-if="isAccountMenu"
            class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] left-[-106px] border-x border-b"
          >
            <div v-if="true">
              <div class="text-semobold text-[15px] my-4 px-3">
                Welcome to AliExpress!
              </div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/auth"
                  class="bg-[#ff4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
                >
                  Login / Register
                </NuxtLink>
              </div>
            </div>
            <div class="border-b" />
            <ul class="border-b">
              <li
                @click="navigateTo('/orders')"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
              >
                My orders
              </li>
              <li
                v-if="true"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
              >
                Sign out
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div id="MainHEader" class="flex items-center w-full bg-white">
      <div
        class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
      >
        <NuxtLink to="/" class="min-w-[170px]">
          <img width="170" src="/Aliexpress-logo.png" alt="" />
        </NuxtLink>
        <div class="max-w-[700px] w-full md:block hidden">
          <div class="relative">
            <div
              class="flex items-center border-2 border-[#ff4646] rounded-md w-full"
            >
              <input
                class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                type="text"
                placeholder="kitchen accessories"
                v-model="searchItem"
              />
              <Icon
                v-if="isSearching"
                name="eos-icons:loading"
                size="25"
                class="mr-2"
              />
              <button class="flex items-center h-[100%] p-1.5 bg-[#ff4646]">
                <Icon name="ph:magnifying-glass" size="20" color="#fff" />
              </button>
            </div>
            <div
              v-if="false"
              class="absolute bg-white max-w-[700px] h-auto w-full"
            >
              <div class="p-1">
                <NuxtLink
                  to="`/item/1`"
                  class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                >
                  <div class="flex items-center">
                    <img
                      class="rounded-md"
                      width="40"
                      src="https://piscum.photos/id/82/300/320"
                      alt=""
                    />
                    <div class="truncate ml-2">TESTING</div>
                  </div>
                  <div class="truncate">$ 98.99</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/shoppingcart" class="flex items-center">
          <button
            class="relative md:block hidden"
            @mouseenter="isCartHover = true"
            @mouseleave="isCartHover = false"
          >
            <span
              class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#ff4646] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
            >
              0
            </span>
            <div class="min-w-[40px]">
              <Icon name="ph:shopping-cart-simple-light" size="33" :color="isCartHover ? '#ff4646' : ''"/>
            </div>
          </button>
        </NuxtLink>
        <button
          @click="useStore.isMenuOverlay = true"
          class="md:hidden block rounded-full p-1.5 mt-[4px] hover:bg-gray-200"
        >
          <Icon name="radix-icons:hamburger-menu" size="33" />
        </button>
      </div>
    </div>
  </div>
  <Loading v-if="useStore.isLoading"/>
  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]"></div>
  <slot />
  <Footer v-if="!useStore.isLoading"/>
</template>

<script setup>
import {useUserStore} from '~/stores/user'
const useStore = useUserStore()

let isAccountMenu = ref(false);
let searchItem = ref("");
let isSearching = ref(false);
let isCartHover = ref(false);
</script>
