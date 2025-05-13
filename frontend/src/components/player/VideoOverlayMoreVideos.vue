<template>
  <div class="grid grid-cols-2 w-full gap-2 max-w-2xl auto-cols-min mx-auto">
    <div v-for="video in videos" :key="video.id" class="cursor-pointer flex justify-center hover:bg-slate-100/30 rounded-2xl p-3 transition-all ease-in-out" @click="emit('load-video', video.src)">
      <img src="/avatar1.png" class="aspect-square object-contain rounded-sm w-[150px]">
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VideoDetail } from '@/components/player'

const emit = defineEmits({
  'load-video'(_value: string) {
    return true
  }
})

defineProps<{
  videos: VideoDetail[]
}>()
</script>
