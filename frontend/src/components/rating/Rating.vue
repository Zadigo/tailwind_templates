<template>
  <div class="flex items-center justify-start">
    <slot :selected-value="selectedValue" />
  </div>
</template>

<script setup lang="ts">
const selectedValue = ref<number | null>(null)
</script>
