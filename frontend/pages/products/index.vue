<template>
  <section class="mt-10">
    <div class="h-full px-1">
      <!-- Header -->
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

              <BaseButton :active="grid===3" tonal @click="grid=3">
                <Icon name="material-symbols:grid-on-sharp" size="13" />
              </BaseButton>

              <BaseButton :active="grid===4" tonal @click="grid=4">
                <Icon name="material-symbols:grid-view" size="13" />
              </BaseButton>
            </div>
          </div>
        </BaseCardbody>
      </BaseCard>

      <!-- Feed -->
      <div :class="{ 'lg:grid-cols-3': grid === 3, 'lg:grid-cols-4': grid === 4 }" class="grid grid-rows-12 lg:grid-rows-1 lg:gap-1">
        <BaseEcommercecard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const grid = ref(4)
const { cachedResponse, products } = storeToRefs(useTemplates())
const { data, status, error, refresh } = await useFetch('/api/products',{
  transform(data) {
    cachedResponse.value = data
    // products.value = data.results
    return data
  }
})
</script>
