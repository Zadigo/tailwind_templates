<template>
  <section class="mt-10">
    <div class="h-full px-1">
      <BaseCard class="my-5 bg-white" tonal>
        <BaseCardbody>
          <div class="flex justify-between align-middle">
            <div class="flex gap-1">
              <BaseButton tonal>
                Tout
              </BaseButton>

              <BaseButton v-for="i in 2" :key="i" tonal>
                Jupes {{ i }}
              </BaseButton>

              <BaseButton class="ms-10" tonal>
                <Icon name="fa:sliders" size="13" />
                Filtres
              </BaseButton>
            </div>

            <div class="flex align-middle gap-1">
              <p class="me-2">15 produits</p>

              <BaseButton tonal>
                <Icon name="material-symbols:grid-on-sharp" size="13" />
              </BaseButton>

              <BaseButton tonal>
                <Icon name="material-symbols:grid-view" size="13" />
              </BaseButton>
            </div>
          </div>
        </BaseCardbody>
      </BaseCard>

      <!-- Feed -->
      <div class="grid grid-rows-12 lg:grid-rows-1 lg:grid-cols-4 lg:gap-1">
        <BaseEcommercecard v-for="i in 4" :key="i" :src="`/ecommerce/img${i}.jpg`" />
      </div>
      <BaseSkeleton v-for="i in 4" :key="i" :loading="true" height="1000" />
    </div>
  </section>
</template>

<script setup lang="ts">
// const { data, status, error, refresh } = await useFetch('/api/products',{
    
// })
</script>
