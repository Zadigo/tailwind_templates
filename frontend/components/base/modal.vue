<template>
  <!-- hidden -->
  <!-- Backdrop -->
  <div v-if="show" id="modalBackdrop" :class="backdropClasses" class="fixed inset-0 bg-black opacity-40 bg-opacity-50 transition-opacity z-40" @click="show=false" />

  <!-- Modal -->
  <div id="modal" :class="{ 'scale-100': show, 'scale-0': !show }" class="fixed inset-0 flex items-center justify-center z-50 transform transition-transform duration-300">
    <div class="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold">
          Modal Title
        </h3>
        <button id="closeModal" type="button" class="text-gray-500 cursor-pointer hover:text-gray-700 focus:outline-none" @click="show=false">
          <Icon name="fa:close" />
        </button>
      </div>

      <div class="mb-4">
        <p>This is the modal content. You can add any text or components here.</p>
      </div>

      <div class="flex justify-end">
        Footer
      </div>
    </div>
  </div>

  <!-- <div class="relative">
  </div> -->
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

const backdropClasses = computed(() => {
  return [
    {
      'hidden': !show.value,
      'pointer-events-none': !show.value
    }
  ]
})
</script>
