<template>
  <!-- Backdrop -->
  <div v-if="show" :class="{ 'pointer-events-none': !show }" class="fixed inset-0 bg-black/50 z-40 transition-opacity" @click="show=false" />
  
  <!-- Modal -->
  <div :class="{ 'translate-x-0': show, '-translate-x-full': !show }" class="fixed inset-y-0 left-0 w-10/12 md:w-64 bg-white z-50 shadow-lg transform transition-transform duration-300">
    <div class="flex justify-between items-center p-4 border-b border-gray-100">
      <h5 class="text-lg font-semibold">
        Offcanvas
      </h5>

      <button type="button" class="text-gray-500 rounded-full p-1 w-8 h-8 hover:bg-gray-100 focus:outline-none" @click="show=false">
        <Icon name="fa:close" size="11" />
      </button>
    </div>

    <!-- Offcanvas Body -->
    <div class="p-4 font-light">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits({
  'update:modelValue'(_value: boolean) {
    return true
  }
})

const show = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})
</script>
