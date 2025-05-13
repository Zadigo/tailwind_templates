<template>
  <RadioGroup v-model="selectedValue" :defaul-value="0" class="inline-flex transition-all ease-in-out has-[button]:cursor-pointer" @mouseleave="currentlyHovered=null">
    {{ selectedValue }} {{ currentlyHovered }}
    <div v-for="i in 5" :key="i" class="flex items-center justify-start">
      <RadioGroupItem :value="i" class="hidden" @click="handleSelection(i)" />

      <template v-if="isFilled(i)">
        <Star fill="black" @click="handleSelection(i)" />
      </template>

      <template v-else>
        <!-- :fill="currentlyHovered && (i <= currentlyHovered) ? 'black' : 'white'" -->
        <Star @mouseenter="handleHover(i)" @click="handleSelection(i)" />
      </template>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'

const selectedValue = ref<number | null>(null)
const currentlyHovered = ref<number | null>(null)

function handleSelection(value: number) {
  if (value === selectedValue.value) {
    selectedValue.value = null
  } else {
    selectedValue.value = value
  }
}

function isFilled(value: number) {
  if (selectedValue.value) {
    return value <= selectedValue.value
  } else {
    return false
  }
}

function handleHover(value: number) {
  currentlyHovered.value = value
}
</script>
