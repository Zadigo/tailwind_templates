<template>
  <li class="relative w-full max-w-sm items-center mb-3">
    <Input id="search" v-model="search" type="text" placeholder="Search..." class="pl-10" />

    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-5 text-muted-foreground" />
    </span>
  </li>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

interface Props {
  items?: string[]
}

withDefaults(defineProps<Props>(), {
  items: () => []
})

const search = ref<string>('')

// const searchedListboxValues = reactive(() => {
//   if (search.value === '') {
//     return props.items
//   } else {
//     return props.items.filter(x => x === search.value)
//   }
// })
</script>
