<template>
  <div id="floor" class="grid grid-cols-6 p-3">
    <SquareBlock v-for="category in categories" :key="category.id" :category="category" @select-square="handleSquareSelected" />

    <Dialog v-model:open="showCategory">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Category name
          </DialogTitle>
        </DialogHeader>

        <div class="pt-5">
          <div class="relative">
            <img src="/avatar1.png" alt="" class="rounded-md">

            <div id="timer" class="p-4 rounded-md bg-white/50 font-bold text-2xl absolute top-1.5 right-1.5">
              45
            </div>
          </div>

          <div class="py-5">
            <Input @keypress.enter="handleNextAnswer" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
const categories = ref(Array.from({ length: 30 }, (_a, b) => {
  const item = {
    id: b,
    title: `Categorie ${b}`,
    user: null
  }

  if (b === 7 || b == 8 || b === 14) {
    item.user = 'Kendall'
  }

  return item
}))

const showCategory = ref<boolean>(false)

/**
 *
 */
function handleSquareSelected() {
  showCategory.value = true
}

/**
 *
 */
function handleNextAnswer() {
  // Do something
}
</script>
