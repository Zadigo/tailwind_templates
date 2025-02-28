<template>
  <input v-model="value" type="text" placeholder="Name" class="p-3 bg-gray-100 rounded-md my-2 font-sans font-sm text-gray-500 !outline-none" @focus="emit('focus')">
  <!-- <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex place-items-center">
      <Icon name="fa:search" class="absolute h-5 w-5 text-gray-400" />
    </div>
    <input v-model="value" type="text" placeholder="Name" class="p-3 pl-10 bg-gray-100 rounded-md my-2 !outline-none block w-full font-sans text-sm text-gray-500" @focus="emit('focus')">
  </div> -->
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
