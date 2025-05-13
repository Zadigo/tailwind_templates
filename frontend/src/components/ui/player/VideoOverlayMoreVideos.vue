<template>
  <div class="grid grid-cols-2 w-full gap-2 max-w-2xl mx-auto">
    <Card v-for="i in 4" :key="i" class="bg-slate-50 cursor-pointer" @click="emit('load-video', '/vid2.mp4')">
      <CardContent>
        <div class="max-w-2/6">
          <img src="/avatar1.png" class="aspect-square object-contain rounded-sm">
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits({
  'load-video'(_value: string) {
    return true
  }
})
</script>
