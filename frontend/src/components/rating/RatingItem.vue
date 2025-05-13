<template>
  <div class="flex items-center justify-start">
    <!-- class="hidden" -->
    <!-- :disabled="true" -->
    <RadioGroupItem :value="i" @click="handleSelection(i)" />

    <slot v-if="isFilled(i)" name="on-icon">
      <Star fill="black" @click="handleSelection(i)" />
    </slot>

    <slot v-else name="off-icon">
      <!-- :fill="currentlyHovered && (i <= currentlyHovered) ? 'black' : 'white'" -->
      <Star @mouseenter="handleHover(i)" @click="handleSelection(i)" />
    </slot>
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
