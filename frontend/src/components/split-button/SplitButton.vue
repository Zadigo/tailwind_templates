<template>
  <div class="flex justify-start items-center">
    <Button :class="cn(buttonVariants({ variant, size }), 'rounded-tr-none rounded-br-none', props.class)">
      <slot />
    </Button>

    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button :class="cn(buttonVariants({ variant, size }), 'rounded-tl-none rounded-bl-none', props.class)">
          <slot name="icon">
            <ChevronDown />
          </slot>
        </Button>
      </DropdownMenuTrigger>

      <slot name="dropdown" />
    </DropdownMenu>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'
import { type ButtonVariants, buttonVariants } from '@/components/ui/button'

interface Props {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {})
</script>
