<template>
  <div class="bg-accent/50 p-3 rounded-md max-w-max mx-auto shadow-sm">
    <div class="grid grid-cols-2">
      <div id="details" class="flex gap-4 items-center">
        <img src="/avatar1.png" class="w-[50px] rounded-md aspect-square object-contain">

        <div class="flex flex-col">
          <h4 class="font-bold">
            Some title
          </h4>

          <p class="font-light">
            00:34
          </p>
        </div>
      </div>

      <div id="actions" class="flex items-center justify-end">
        <Button variant="ghost" @click="emit('load-video', '/vid2.mp4')">
          <Play />
        </Button>

        <Button variant="ghost" @click="emit('load-video', '/vid2.mp4')">
          <PlusCircle />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Play, PlusCircle } from 'lucide-vue-next'

const emit = defineEmits({
  'load-video'(_value: string) {
    return true
  }
})
</script>
