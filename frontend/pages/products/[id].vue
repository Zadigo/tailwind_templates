<template>
  <section id="product" class="mt-3 relative">
    <div class="grid grid-cols-12 grid-row-1 w-full gap-5">
        <!-- Images -->
      <template v-if="currentProduct">
        <div v-if="currentProduct.images.length===6" id="product-images" class="grid grid-cols-2 grid-rows-3 gap-1 col-span-8">
          <div v-for="image in currentProduct.images" :key="image.id" id="image" class="cursor-zoom-in" @click="show=true">
            <img :src="image.original" :alt="image.name">
          </div>
        </div>
        
        <div v-if="currentProduct.images.length===5" class="grid grid-cols-1 grid-rows-2 col-span-8 auto-cols-min auto-rows-max">
          <div class="grid grid-cols-2 gap-x-1">
            <div v-for="image in currentProduct.images.slice(0, 2)" :key="image.id" id="image">
              <img :src="image.original" :alt="image.name">
            </div>
          </div>

          <div class="grid grid-cols-3 gap-x-1 gap-y-1 mt-1 auto-cols-max">
            <div v-for="image in currentProduct.images.slice(2, 5)" :key="image.id" id="image">
              <img :src="image.original" :alt="image.name">
            </div>
          </div>
        </div>
      </template>
      
      <!-- Details -->
      <aside v-if="currentProduct" id="product-details" class="col-span-4 px-10">
        <h1 id="product-name" class="text-xl mt-5 font-semibold">
          {{ currentProduct.name }}
        </h1>

        <p class="font-semibold">
          19.99€
        </p>

        <div id="variants" class="my-5 flex gap-2 h-auto w-full">
          <NuxtLink v-for="i in 3" :key="i" to="/" aria-current="true">
            <img src="/ecommerce/img1.jpg" alt="" width="50" class="cursor-pointer hover:opacity-80">
          </NuxtLink>
        </div>

        <p id="product-reference" class="font-light text-sm my-5">
          Bleu · Réf.. 0544/360/400
        </p>
        
        <div class="border-t-2 border-gray-100 my-5 me-10" />

        <div v-if="currentProduct" id="sizes" class="inline-flex gap-2 mb-4">
          <button v-for="size in currentProduct.sizes" :key="size.id" type="button" class="rounded-full w-10 h-10 bg-gray-50 text-sm font-normal hover:bg-gray-100 hover:border-2 hover:border-gray-100">
            {{ size.name }}
          </button>
        </div>

        <p class="font-light">Taille et hauteur du mannequin : S · 178 cm</p>
        <NuxtLink to="#" class="text-sm font-semibold underline underline-offset-2 block mt-2" @click="sizeGuide=true">
          Guide des tailles
        </NuxtLink>

        <BaseButton class="mt-10" @click="sizeGuide=true">
          Ajouter au panier
        </BaseButton>

        <BaseList class="shadow-none border border-gray-100 mt-5">
          <BaseListitem class="border-b-2 border-gray-100 flex justify-between items-center text-sm" @click="show=true">
            Composition, soin et traçabilité
            <Icon name="fa:chevron-right" size="10" />
          </BaseListitem>

          <BaseListitem class="flex justify-between text-sm">
            Livraison et retours
            <Icon name="fa:chevron-right" size="10" />
          </BaseListitem>
        </BaseList>
      </aside>
    </div>

    <!-- Recommendations -->
    <div id="recommendations" class="mt-20">
      <h3 class="text-2xl font-bold text-center mb-5">
        Cela peut t'intéresser
      </h3>

      <div class="grid grid-rows-12 lg:grid-rows-1 lg:grid-cols-5 lg:gap-1">
        <BaseEcommercecard v-for="product in recommendations" :key="product.id" :product="product" />
      </div>
    </div>

    <!-- Banner -->
    <ClientOnly>
      <div v-if="showBanner" :class="{ 'translate-y-0 opacity-10': !showBanner, 'translate-y-0 opacity-100': showBanner }" class="bg-white p-2 rounded-md shadow-md fixed bottom-5 w-6/12 mx-auto left-1/4 h-auto transition-all ease z-50">
        <div v-if="currentProduct" class="flex justify-between">
          <div class="flex justify-start gap-3 align-center">
            <img :src="currentProduct.get_main_image.original" :alt="currentProduct.name" class="w-10 rounded-md">
            <!-- <p class="font-semibold text-sm">
              Top bandeau crêpe bas asymétrique
            </p> -->
            <p class="font-bold">
              {{ currentProduct.unit_price }}
            </p>
          </div>

          <div class="flex gap-2">
            {{ y }}
            <BaseSelect v-model="selectedSize" :items="['XS', 'S', 'M']" />
            <BaseButton>Ajouter au panier</BaseButton>
          </div>
        </div>
      </div>
    </ClientOnly>

    <BaseModal v-model="show" />
    <BaseOffcanvas v-model="sizeGuide" />
  </section>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import type { Product } from '~/types'

const { currentProduct } = storeToRefs(useTemplates())
const show = ref(false)
const sizeGuide = ref(false)
const selectedSize = ref('')
const { y } = useScroll(window)
const isLargeScreen = useMediaQuery('(min-width: 320px)')
const { id } = useRoute().params
const recommendations = ref<Product[]>(products)
const showBanner = computed(() => {
  return y.value >= 1720 && y.value <= 2100
})

const { data, status, error, refresh } = await useFetch(`/api/products/${id}`, {
  onResponse() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  transform(data) {
    console.log(data)
    currentProduct.value = data
    return data
  }
})

const isLoading = computed(() => status.value === 'pending')
</script>
