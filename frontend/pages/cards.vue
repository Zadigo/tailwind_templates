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

      <BaseCard src="/img1.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts">
const showCart = ref(false)
</script>
