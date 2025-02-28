<template>
<div class="group relative" @mouseover="showCart=true" @mouseleave="showCart=false">
  <NuxtLink :to="`/products/${product.id}`">
    <img :src="product.get_main_image.original" :alt="product.get_main_image.name" class="w-full lg:aspect-auto">
  </NuxtLink>
  <!-- <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full bg-gray-200 object-cover lg:aspect-auto lg:h-full"> -->

  <!-- <div class="absolute top-0 left-0">
    <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-full">
    <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-full">
    <img :src="src" alt="Front of men's Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-full">
  </div> -->
  
  <div v-show="showCart" class="absolute w-full flex justify-center align-middle transition-all ease-in-out z-50 invisible lg:visible lg:bottom-[3.5rem]">
    <div class="bg-white p-5 w-full m-1">
      <p class="fw-semibold text-sm text-center mb-3 font-normal">
        Sélectionne une taille
      </p>

      <div class="flex justify-center flex-wrap gap-2">
        <button v-for="size in product.sizes" :key="size.id" type="button" class="py-2 px-5 rounded-full text-sm flex align-middle gap-1 hover:bg-gray-50">
          <Icon v-if="!size.availability" name="fa-regular:clock" class="text-orange-400" />
          <span>{{ size.name }}</span>
        </button>
      </div>
    </div>
  </div>

  <div class="mt-4 flex justify-between align-top gap-5">
    <div>
      <h3 class="text-sm text-gray-700">
        <NuxtLink :to="`/products/${product.id}`">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </NuxtLink>
      </h3>

      <!-- <p class="mt-1 text-sm text-gray-500">
        Black
      </p> -->
      <p class="font-semibold text-sm">
        {{ product.unit_price }}
      </p>
    </div>
    
    <!-- <p class="text-sm font-medium text-gray-900">
      35€
    </p> -->
    <div class="flex align-center">
      <button type="button" class="bg-white rounded-full p-2" @click="isLiked=!isLiked">
        <Icon v-if="isLiked" name="fa:heart" size="13" />
        <Icon v-else name="fa-regular:heart" size="13" />
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Product } from '~/types';

const showCart = ref(false)
const isLiked = ref(false)

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
</script>
