<template>
  <div ref="videoPanelRef" class="absolute right-0 bottom-1/1 mb-2 p-1 rounded-md bg-accent/80 z-60 min-w-[300px]">
    <div v-for="setting in videoSettings" class="p-2 hover:bg-slate-200 rounded-md cursor-pointer text-sm flex justify-between items-center">
      {{ setting }}
      <ArrowRight :size="16" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { videoSettings } from '@/components/ui/player'
import { ArrowRight } from 'lucide-vue-next'

const emit = defineEmits({
  close() {
    return true
  }
})

const videoPanelRef = useTemplateRef('videoPanelRef')

onClickOutside(videoPanelRef, () => {
  emit('close')
})
</script>
