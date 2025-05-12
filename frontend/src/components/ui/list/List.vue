<template>
  <div data-slot="list" :class="cn(listVariants({ variant }), props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { listVariants, ListVariants } from '@/components/ui/list'
import { cn } from '@/lib/utils'

import type { HTMLAttributes } from 'vue'

interface Props {
  variant?: ListVariants['variant']
  class?: HTMLAttributes['class']
}


const props = withDefaults(defineProps<Props>(), {})
</script>
