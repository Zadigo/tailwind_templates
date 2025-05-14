import { cva } from 'class-variance-authority'

export type ListboxHighlight = 'color' | 'check'

export const listboxVariants = cva(
  'p-3 border-2 border-slate-100 rounded-md max-h-[200px] overflow-y-scroll',
  {
    variants: {
      variant: {
        default: '',
        check: ''
      },
      defaultVariant: {
        variant: 'default'
      }
    }
  }
)
