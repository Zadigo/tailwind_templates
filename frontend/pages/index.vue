<template>
  <section class="site">
    <div>
      <h1>Inputs</h1>
      
      <div class="flex gap-2">
        <BaseInput v-model="search" />

        <BaseSelect v-model="search" :items="items" />

        <BaseAutocomplete v-model="search" :items="items" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const search = ref('')
const items = ['Kendall', 'Bella', 'Gigie', 'Naomi']
</script>
