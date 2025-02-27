<template>
  <div class="relative inline-block">
    <BaseInput v-model="value" ref="inputEl" class="cursor-pointer transition-all ease hover:bg-gray-200" @focus="isOpen=true" />
    
    <BaseDropdown :is-open="isOpen">
      <BaseList>
        <BaseListitem v-for="item in items" :key="item" @click="handleSelection(item)">
          {{ item }}
        </BaseListitem>
      </BaseList>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  items: {
    type: Object as PropType<string[]>
  }
})

const emit = defineEmits({
  'update:modelValue'(value: string) {
    return true
  }
})

const inputEl = shallowRef<HTMLElement>()
const isOpen = ref(false)

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

onClickOutside(inputEl, () => {
  isOpen.value = false
})

function handleSelection(item: string) {
  isOpen.value = false
  emit('update:modelValue', item)
}
</script>
