<template>
  <div ref="buttonEl" class="relative inline-block">
    <NuxtLink v-if="to" :to="to" :class="buttonClasses" class="px-4 py-2 w-full rounded-md bg-blue-400 font-semibold uppercase block  hover:bg-blue-500" @click="handleClick">
      <slot />
    </NuxtLink>

      <button v-else type="button" :class="buttonClasses" class="px-4 py-2 w-full rounded-md bg-blue-400 font-semibold uppercase hover:bg-blue-500" @click="handleClick">
        <slot />
      </button>

    <div ref="dropdownEl">
      <slot name="dropdown" :is-open="isOpen" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String
  },
  tonal: {
    type: Boolean
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

const buttonClasses = computed(() => {
  return [
    'transition-all ease-in-out duration-[3000]',
    {
      'shadow-md text-white': !props.tonal,
      'bg-gray-100 hover:bg-gray-100 text-black hover:bg-gray-200': props.tonal
    }
  ]
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
