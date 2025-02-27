<template>
  <section class="mt-10">
    <div class="h-full px-1">
      <BaseCard class="my-5 bg-white" tonal>
        <BaseCardbody>
          <BaseButton>Tout</BaseButton>
        </BaseCardbody>
      </BaseCard>

      <!-- Feed -->
      <div class="grid grid-rows-12 lg:grid-rows-1 lg:grid-cols-4 lg:gap-1">
        <BaseEcommercecard v-for="i in 4" :key="i" :src="`/ecommerce/img${i}.jpg`" />
      </div>
    </div>
  </section>
</template>
