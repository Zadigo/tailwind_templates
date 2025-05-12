export { default as List } from './List.vue'
export { default as ListItem } from './ListItem.vue'

import { cva, type VariantProps } from 'class-variance-authority'

export const listVariants = cva(
   `rounded-md shadow-md bg-white w-full`,
  {
    variants: {
      variant: {
        default: 'border-accent *:not-last:border-b-1 *:not-last:border-accent',
        flush: '*:not-last:border-b-1 *:not-last:border-accent shadow-none'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type ListVariants = VariantProps<typeof listVariants>
