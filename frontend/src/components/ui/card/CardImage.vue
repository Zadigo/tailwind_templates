<template>
  <img :src="src" data-slot="card-image" class="card-image rounded-tr-xl rounded-tl-xl">
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String
  }
})
</script>
