<template>
  <div :class="cnClass" data-slot="megamenu" role="menu">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {})

const cnClass = cn(
  `absolute z-[999] hidden min-w-[180px] max-w-screen-xl overflow-auto rounded-xl 
  border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 
  shadow-lg shadow-blue-gray-500/10 focus:outline-none lg:block`,
  props.class
)
</script>
