<template>
  <div ref="volumePanelRef" class="absolute right-0 bottom-1/1 mb-2 p-3 rounded-md bg-accent z-60 transition-all ease-in-out">
    <Slider v-model="volume" :min="0" :max="100" :step="10" class="min-w-[200px]" />
  </div>
</template>

<script setup lang="ts">
// const props = defineProps({
//   modelValue: {
//     type: Array as PropType<number[]>,
//     default: () => [100]
//   }
// })

// const emit = defineEmits({
//   'update:modelValue'(_value: number[]) {
//     return true
//   }
// })

// const volume = computed({
//   get: () => [props.modelValue[0] * 100],
//   set: (value) => {
//     emit('update:modelValue', [value[0] / 100])
//   }
// })

const emit = defineEmits({
  close() {
    return true
  }
})

const volumePanelRef = useTemplateRef('volumePanelRef')

const volumeRef = inject<Ref<number[]>>('volume')

const volume = computed({
  get: () => {
    if (volumeRef) {
      return [volumeRef.value[0] * 100]
    } else {
      return [0]
    }
  },
  set: (value) => {
    if (volumeRef) {
      volumeRef.value = [value[0] / 100]
    }
  }
})

onClickOutside(volumePanelRef, () => emit('close'))
</script>>
