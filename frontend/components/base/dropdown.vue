<template>
  <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
    <div v-if="isOpen" role="menu">
      <div ref="menuEl" class="relative z-50">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useParentElement } from '@vueuse/core';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const menuEl = shallowRef<HTMLElement>()

const parent = useParentElement(menuEl)
</script>
