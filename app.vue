<template>
  <div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]">  </div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "custom";
</script>
