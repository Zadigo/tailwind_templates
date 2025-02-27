<template>
<div class="group relative" @mouseover="showCart=true" @mouseleave="showCart=false">
  <img :src="src" alt="" class="w-full lg:aspect-auto">
  <!-- <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full bg-gray-200 object-cover lg:aspect-auto lg:h-full"> -->

  <!-- <div class="absolute top-0 left-0">
    <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-full">
    <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-full">
    <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-full">
  </div> -->
  
  <div v-if="showCart" class="absolute w-full flex justify-center align-middle transition-all ease-in-out z-50 invisible lg:visible lg:bottom-[3.5rem]">
    <div class="bg-white p-5 w-full m-1">
      <p class="fw-semibold text-sm text-center mb-3 font-normal">
        Sélectionne une taille
      </p>

      <div class="flex justify-center flex-wrap gap-2">
        <button v-for="i in 3" :key="i" type="button" class="py-2 px-5 rounded-full text-sm flex align-middle gap-1 hover:bg-gray-50">
          <Icon name="fa-regular:clock" class="text-orange-400" />
          <span>XS</span>
        </button>
      </div>
    </div>
  </div>

  <div class="mt-4 flex justify-between align-top">
    <div>
      <h3 class="text-sm text-gray-700">
        <NuxtLink to="/">
          <span aria-hidden="true" class="absolute inset-0"></span>
          Jupe en coton de soie
        </NuxtLink>
      </h3>

      <!-- <p class="mt-1 text-sm text-gray-500">
        Black
      </p> -->
      <p class="font-semibold text-sm">35€</p>
    </div>
    
    <!-- <p class="text-sm font-medium text-gray-900">
      35€
    </p> -->
    <div class="flex align-center">
      <button type="button" class="bg-white rounded-full p-2">
        <Icon name="fa-regular:heart" size="13" />
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const showCart = ref(false)

defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>
