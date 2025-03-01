<template>
  <div ref="buttonEl" class="relative inline-block">
    <NuxtLink v-if="to" :to="to" :class="buttonClasses" class="px-4 py-2 w-full rounded-md font-semibold uppercase block" @click="handleClick">
      <slot />
    </NuxtLink>

    <button v-else type="button" :class="buttonClasses" class="px-4 py-2 w-full rounded-md font-semibold uppercase" @click="handleClick">
      <slot />
    </button>

    <div ref="dropdownEl">
      <slot name="dropdown" :is-open="isOpen" />
    </div>
  </div>
</template>

<script setup lang="ts">
type Color = 'primary' | 'success' | 'info' | 'warning' | 'secondary' | 'base'

const props = defineProps({
  to: {
    type: String
  },
  tonal: {
    type: Boolean
  },
  active: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String as PropType<Color>,
    default: 'base'
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

const buttonColor = computed(() => {
  return [
    {
      'bg-blue-400 hover:bg-blue-500': props.color === 'primary',
      'bg-green-400 hover:bg-green-500': props.color === 'success',
      'bg-yellow-400 hover:bg-yellow-500': props.color === 'warning',
      'bg-slate-400 hover:bg-slate-500': props.color === 'secondary',
      'bg-blue-300 hover:bg-blue-400': props.color === 'info',
      'bg-gray-200 hover:bg-gray-300': props.color === 'base'
    },
    {
      'text-white': props.color !== 'base'
    },
    {
      'shadow-none opacity-50': props.disabled
    }
  ]
})

const buttonShadow = computed(() => {
  return [
    {
      'shadow-none': props.tonal,
      'shadow-md': !props.tonal
    }
  ]
})

const buttonClasses = computed(() => {
  return [
    'transition-all ease-in-out duration-[3000]',
    ...buttonColor.value,
    ...buttonShadow.value

    // 'bg-blue-400',
    // {
    //   'hover:bg-blue-500': !props.disabled,
    //   'shadow-md text-white': !props.tonal,
    //   'bg-gray-100 text-black hover:bg-gray-200': props.tonal,
    //   'bg-gray-300': props.active && props.tonal,
    //   'bg-blue-400 shadow-none opacity-50': props.disabled
    // }
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
