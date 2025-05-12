<template>
  <div data-slot="list-item" :class="listItemClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

import type { HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class'],
  active?: boolean,
  disabled?: boolean
}>(), {
  active: false,
  disabled: false
})

const activeClass = computed(() => {
  return [
    props.active ? 'bg-accent first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md' : '',
    props.disabled ? 'text-black/50 bg-accent': ''
  ]
})

const listItemClass = cn(
  'text-black font-light normal-case text-left',
  'py-4 px-5 transition transition-all ease-in-out animation-500',
  'has-[a]:cursor-pointer has-[a]:hover:bg-accent',
  'has-[a]:first:hover:rounded-tl-md has-[a]:first:hover:rounded-tr-md',
  'has-[a]:last:hover:rounded-bl-md has-[a]:last:hover:rounded-br-md',
  '[a]:block [a]:w-full',
  'has-[a.router-link-exact-active]:bg-accent',
  'has-[data-slot=avatar]:flex has-[data-slot=avatar]:flex-row has-[data-slot=avatar]:gap-4 has-[data-slot=avatar]:items-center',
  ...activeClass.value,
  props.class
)
</script>
