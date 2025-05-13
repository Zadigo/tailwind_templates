<template>
  <div :class="squareClass" class="p-5 flex font-semibold text-1xl items-center justify-center cursor-pointer text-white transition-all ease-in-out" @click="handleSelectSquare">
    <span>
      {{ category.title }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ category: object }>()
const emit = defineEmits<{
  (event: 'select-square', value): void
}>()

const isHighlighted = computed(() => props.category.user !== null)

const squareClass = computed(() => {
  return [
    {
      'bg-yellow-500 hover:bg-yellow-400/50 border-2 border-white': isHighlighted.value,
      'bg-blue-400 hover:bg-blue-400/50': !isHighlighted.value
    }
  ]
})

function handleSelectSquare() {
  emit('select-square', props.category)
}
</script>
