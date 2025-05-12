<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="card" :class="cn('bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm has-[.card-image]:pt-0', props.class)">
    <slot />
  </div>
</template>
