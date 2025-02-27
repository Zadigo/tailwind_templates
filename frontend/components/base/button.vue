<template>
  <div ref="buttonEl" class="relative inline-block">
    <NuxtLink v-if="to" :to="to" class="px-4 py-2 w-full shadow-md rounded-md bg-blue-400 font-semibold text-white uppercase block transition-all ease-in-out duration-[3000] hover:bg-blue-500" @click="handleClick">
      <slot />
    </NuxtLink>

    <button v-else type="button" class="px-4 py-2 w-full shadow-md rounded-md bg-blue-400 font-semibold text-white uppercase transition-all ease-in-out duration-[3000] hover:bg-blue-500" @click="handleClick">
      <slot />
    </button>

    <div ref="dropdownEl">
      <slot name="dropdown" :is-open="isOpen" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String
  }
})

const emit = defineEmits({
  open(_value: boolean) {
    return true
  },
  click() {
    return true
  }
})

const buttonEl = shallowRef<HTMLElement>()
const isOpen = ref(false)

const slots = useSlots()

const hasDropdown = computed(() => !!slots.dropdown)

onClickOutside(buttonEl, () => {
  if (hasDropdown.value) {
    isOpen.value = false
    emit('open', false)
  }
})

function handleClick() {
  if (hasDropdown.value) {
    isOpen.value = !isOpen.value
    emit('open', isOpen.value)
  }
  emit('click')
}

defineExpose({
  handleClick
})
</script>
