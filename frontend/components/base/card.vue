<template>
  <div class="rounded-md shadow-md h-auto">
    <div v-if="title" class="border-b-2 border-gray-50 p-3">
      <h3 class="text-md font-semibold">
        Header
      </h3>
    </div>

    <slot name="header" />

    <slot name="image">
      <img v-if="src" :src="src" alt="" class="w-full rounded-tl-md rounded-tr-md">
    </slot>

    <div class="p-5">
      <slot />
    </div>

    <div class="border-t-2 border-gray-50 p-3">
      Footer
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: null
  },
  src: {
    type: String,
    default: null
  }
})
</script>
