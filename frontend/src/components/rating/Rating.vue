<template>
  <div class="flex items-center justify-start">
    <RadioGroup v-model="selectedValue" :defaul-value="0" class="inline-flex transition-all ease-in-out has-[button]:cursor-pointer" @mouseleave="currentlyHovered=null">
      <slot />
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface Props {
  modelValue: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  class: ''
})

const emit = defineEmits<{ (event: 'update:modelValue', value: number): void }>()

const selectedValue = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: 0
})

provide('selectedValue', selectedValue)
</script>
