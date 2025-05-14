<template>
  <li :class="itemClass" class="p-2 rounded-sm hover:bg-accent transition-all ease-in-out not-last:mb-1 cursor-pointer text-sm font-normal" @click="handleSelection">
    <Check v-if="isSelected && !isHighlightColor" :size="15" />

    <slot :options="{ value }">
      <span>{{ value }}</span>
    </slot>
  </li>
</template>

<script setup lang="ts">
import { ListboxHighlight } from '@/components/listbox'
import { Check } from 'lucide-vue-next'

const props = withDefaults(defineProps<{ value: string }>(), {})

const listboxValues = inject<string[]>('listboxValues', [])
const listboxHighlight = inject<ListboxHighlight>('listboxHighlight', 'color')

const isSelected = computed(() => listboxValues.includes(props.value))
const isHighlightColor = computed(() => listboxHighlight === 'color')

const itemClass = computed(() => {
  return [
    {
      'bg-black text-white hover:bg-black/80': isSelected.value && isHighlightColor.value,
      'flex justify-start items-center': !isHighlightColor.value
    }
  ]
})

/**
 * Function used to add or remove elemnents
 * from the list of values
 */
function handleSelection() {
  const result = useArrayIncludes(listboxValues, props.value)

  if (result.value) {
    const index = useArrayFindIndex(listboxValues, x => x === props.value)
    listboxValues.splice(index.value, 1)
  } else {
    listboxValues.push(props.value)
  }
}
</script>
