<template>
  <section class="mt-10">
    <div class="h-full px-1 top-2/4">
      <ClientOnly>
        <div v-if="showTopBanner" :class="{ 'translate-y-96': !showTopBanner, 'translate-y-0': showTopBanner }" class="bg-white w-full fixed top-0 left-0 p-5 shadow-md transition-translate ease-in-out duration-1000 z-50">
          {{ y }}
        </div>
      </ClientOnly>

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

      <div class="border-t-2 border-gray-100 mt-20 mb-5 mx-[15rem]" />

      <div id="reassurance" class="text-center">
        <h5 class="font-bold text-md text-center mb-5" aria-label="">
          Nos services
        </h5>

        <div class="inline-flex flex-wrap justify-center w-6/12 gap-8 font-light">
          <p class="flex place-items-center gap-2" aria-label="">
            <Icon name="mdi:truck-delivery" size="30" class="text-slate-800" />
            Livraison gratuite en boutique
          </p>
          <p class="flex place-items-center gap-2" aria-label="">
            <Icon name="mdi:assignment-return-outline" size="30" class="text-slate-800" />
            Retours gratuits en boutique
          </p>
          <p class="flex place-items-center gap-2" aria-label="">
            <Icon name="mdi:truck-delivery" size="30" class="text-slate-800" />
            Paiement 3x sans frais dès 30€ d'achat
          </p>
          <p class="flex place-items-center gap-2" aria-label="">
            <Icon name="material-symbols-light:contact-phone" size="30" class="text-slate-800" />
            Un service client à votre écoute
          </p>
          <p class="flex place-items-center gap-2" aria-label="">
            <Icon name="mdi:lock" size="30" class="text-slate-800" />
            Paiement 100% sécurisé
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { cachedResponse, products } = storeToRefs(useTemplates())

const grid = ref(4)

const { data, status, error, refresh } = await useFetch('/api/products',{
  transform(data) {
    cachedResponse.value = data
    // products.value = data.results
    return data
  }
})

if (error.value) {
  createError(error.value)
}

const isLoading = computed(() => status.value === 'pending')

const { y } = useScroll(window)
const showTopBanner = computed(() => y.value > 150)
</script>
