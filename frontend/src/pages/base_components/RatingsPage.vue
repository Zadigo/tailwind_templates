<template>
  <Card>
    <CardContent>
      {{ rating }}
      <Rating v-model="rating">
        <RatingItem v-for="i in 5" :key="i" :i="i" />
      </Rating>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
const rating = ref<number>(0)
</script>
