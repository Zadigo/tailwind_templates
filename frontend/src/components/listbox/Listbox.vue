<template>
  <ul class="group p-3 border-2 border-slate-100 rounded-md max-h-[200px] overflow-y-scroll">
    <slot name="search" />
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type { ListboxHighlight } from '@/components/listbox'
import type { HTMLAttributes } from 'vue'

interface Props {
  modelValue: string[]
  class?: HTMLAttributes['class']
  multiple?: boolean
  highlight?: ListboxHighlight
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  multiple: true,
  highlight: 'color'
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string[]): void
}>()

const listboxValues = reactive<string[]>(props.modelValue)

provide('listboxValues', listboxValues)
provide('listboxHighlight', props.highlight)

watchArray(listboxValues, (newList) => {
  emit('update:modelValue', newList)
})
</script>
