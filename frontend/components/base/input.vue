<template>
  <input v-model="value" type="text" placeholder="Name" class="p-3 bg-gray-100 rounded-md my-2 !outline-none" @focus="emit('focus')">
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue:{
    type: String,
    required: true
  }
})

const emit = defineEmits({
  'update:modelValue'(_data: string) {
    return true
  },
  focus() {
    return true
  }
})

const slots = useSlots()

const hasDropdown = computed(() => !!slots.dropdown)

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})
</script>
