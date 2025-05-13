<template>
  <div class="flex items-center justify-start">
    <RadioGroupItem :value="i" class="hidden" @click="handleSelection(i)" />

    <template v-if="isFilled(i)">
      <Star fill="black" @click="handleSelection(i)" />
    </template>

    <template v-else>
      <!-- :fill="currentlyHovered && (i <= currentlyHovered) ? 'black' : 'white'" -->
      <Star @mouseenter="handleHover(i)" @click="handleSelection(i)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'

defineProps<{ i: number }>()

const selectedValue = inject<Ref<number>>('selectedValue', ref(0))

const currentlyHovered = ref<number | null>(null)

/**
 *
 * @param value The value of the current rating
 */
function handleSelection(value: number) {
  if (value === selectedValue.value) {
    selectedValue.value = 0
  } else {
    selectedValue.value = value
  }
}

/**
 *
 * @param value The value of the current rating
 */
function isFilled(value: number) {
  if (selectedValue.value) {
    return value <= selectedValue.value
  } else {
    return false
  }
}

/**
 *
 * @param value THe value of the current rating
 */
function handleHover(value: number) {
  currentlyHovered.value = value
}
</script>
