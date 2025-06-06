<template>
  <input v-model="modelValue" data-slot="input" :class="inputClass">
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const inputClass = cn(
  'border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none',
  'file:text-foreground placeholder:text-muted-foreground file:bg-transparent file:text-sm file:font-medium',
  'selection:bg-primary selection:text-primary-foreground',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50', 
  'dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
  'file:inline-flex file:h-7 file:border-0 md:text-sm',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
  'px-4 py-6',
  props.class
)
</script>
