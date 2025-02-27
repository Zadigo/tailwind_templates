<template>
  <div id="cards" class="mb-5">
    <div class="grid grid-cols-4 gap-3">
      <!-- <BaseCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe ab quos repellendus error impedit perferendis veniam laborum, dolores cupiditate 
        accusantium id odit ratione illo, corporis doloremque maxime aut ipsa fugit?
      </BaseCard> -->

      <!-- <BaseCard title="Simple card" subtitle="A simple card to be used" src="/img1.jpg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe ab quos repellendus error impedit perferendis veniam laborum, dolores cupiditate 
        accusantium id odit ratione illo, corporis doloremque maxime aut ipsa fugit?

        <template #footer>
          <BaseButton>Press me</BaseButton>
        </template>
      </BaseCard> -->

      <!-- <BaseCard src="/img1.jpg" /> -->
    </div>

    <div class="h-full px-1 lg:px-1">
      <div class="grid grid-rows-12 lg:grid-rows-1 lg:grid-cols-4 lg:gap-1">
        <BaseEcommercecard v-for="i in 4" :key="i" :src="`/ecommerce/img${i}.jpg`" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const showCart = ref(false)
</script>
