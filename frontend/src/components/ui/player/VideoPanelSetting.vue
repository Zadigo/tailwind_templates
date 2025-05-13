<template>
  <div class="p-2 hover:bg-slate-200 rounded-md cursor-pointer text-sm flex justify-between items-center" @click="emit('select-setting', setting)">
    {{ setting }}
    <ArrowRight :size="16" />
  </div>
</template>

<script setup lang="ts">
import type { VideoSettings, PlaybackRates } from '@/components/ui/player'
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  setting: string | number | VideoSettings | PlaybackRates
}>()

const emit = defineEmits<{
  (event: 'select-setting', value: string | number | VideoSettings | PlaybackRates): void
}>()

</script>
