<template>
  <section id="product" class="mt-3 relative">
    <div class="grid grid-cols-12 grid-row-1 w-full gap-5">
        <!-- Images -->
      <template v-if="currentProduct">
        <div v-if="currentProduct.images.length===6" id="product-images" class="grid grid-cols-2 grid-rows-3 gap-1 col-span-8">
          <div v-for="image in currentProduct.images" :key="image.id" id="image" class="cursor-zoom-in">
            <img :src="image.original" :alt="image.name" class="cursor-zoom-in" @click="handleSelectImage(image)">
          </div>
        </div>
        
        <div v-if="currentProduct.images.length===5" class="grid grid-cols-1 grid-rows-2 col-span-8 auto-cols-min auto-rows-max">
          <div class="grid grid-cols-2 gap-x-1">
            <div v-for="image in currentProduct.images.slice(0, 2)" :key="image.id" id="image">
              <img :src="image.original" :alt="image.name" class="cursor-zoom-in" @click="handleSelectImage(image)">
            </div>
          </div>

          <div class="grid grid-cols-3 gap-x-1 gap-y-1 mt-1 auto-cols-max">
            <div v-for="image in currentProduct.images.slice(2, 5)" :key="image.id" id="image">
              <img :src="image.original" :alt="image.name" class="cursor-zoom-in" @click="handleSelectImage(image)">
            </div>
          </div>
        </div>
      </template>
      
      <!-- Details -->
      <aside v-if="currentProduct" id="product-details" class="col-span-4 px-10">
        <h1 id="product-name" class="text-xl mt-5 font-semibold">
          {{ currentProduct.name }}
        </h1>

        <p v-if="currentProduct" class="font-bold text-xl">
          {{ currentProduct.unit_price }}
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
          <button v-for="size in currentProduct.sizes" :key="size.id" type="button" :class="{'bg-gray-200': selectedSize === size.name, 'bg-gray-50': selectedSize !== size.name }" class="rounded-full w-10 h-10 text-sm font-normal place-content-center hover:bg-gray-100 hover:border-2 hover:border-gray-100" @click="selectedSize=size.name">
            <Icon v-if="!size.availability" name="fa-regular:clock" size="12" class="text-orange-400" />
            {{ size.name }}
          </button>
        </div>

        <p class="font-light">Taille et hauteur du mannequin : S · 178 cm</p>
        <NuxtLink to="#" class="text-sm font-semibold underline underline-offset-2 block mt-2" @click="sizeGuide=true">
          Guide des tailles
        </NuxtLink>
        
        <Transition mode="out-in" class="transition-all duration-300">
          <BaseButton v-if="selectedSize !== '' && sizeObject && !sizeObject.availability" class="mt-10 place-content-center" color="dark" tonal @click="availabilityModal=true">
            <Icon name="fa:envelope" size="12" class="me-1" />
            Me tenir informer
          </BaseButton>

          <BaseButton v-else class="mt-10" color="primary" tonal :disabled="false" @click="showCart=true">
            Ajouter au panier
          </BaseButton>
        </Transition>

        <BaseList class="shadow-none border border-gray-100 mt-5">
          <BaseListitem class="border-b-2 border-gray-100 flex justify-between items-center text-sm" @click="sizeGuide=true">
            <div class="flex justify-start gap-2">
              
              <span>Composition, soin et traçabilité</span>
            </div>
            <Icon name="fa:chevron-right" size="10" />
          </BaseListitem>

          <BaseListitem class="flex justify-between text-sm" @click="sizeGuide=true">
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
      <div v-if="showBanner" :class="{ 'translate-y-0 opacity-10': !showBanner, 'translate-y-0 opacity-100': showBanner }" class="bg-white p-2 rounded-md shadow-md fixed bottom-5 w-7/12 mx-auto left-1/4 h-auto transition-all ease z-50">
        <div v-if="currentProduct" class="flex justify-between">
          <div class="flex justify-start gap-3 align-center self-center">
            <img :src="currentProduct.get_main_image.original" :alt="currentProduct.name" class="w-10 rounded-md">
            
            <div class="flex flex-col">
              <p class="font-normal text-sm">
                {{ currentProduct.name }}
              </p>
              <p class="font-bold">
                {{ currentProduct.unit_price }}
              </p>
            </div>
          </div>

          <div class="flex gap-2">
            {{ y }}
            <BaseSelect v-model="selectedSize" :items="sizeNames" item-key="name" item-value="name" />
            <BaseButton @click="showCart=true">Ajouter au panier</BaseButton>
          </div>
        </div>
      </div>
    </ClientOnly>

    <ClientOnly>
      <BaseModal v-model="zoomImage" fullscreen>
        <BaseCard>
          <div v-if="currentProduct && selectedImage" class="relative rounded-md">
            <div class="flex absolute top-0 right-0 gap-2 z-40 p-5 bg-white">
              <img v-for="image in currentProduct.images" :key="image.id" :src="image.original" :alt="image.name" width="70" :class="{ 'opacity-50': selectedImage.id === image.id}" class="cursor-pointer" @click="selectedImage=image">
            </div>
            
            <img :src="selectedImage.original" :alt="selectedImage.name" class="w-full cursor-zoom-out" @click="zoomImage=false">
          </div>
        </BaseCard>
      </BaseModal>
    </ClientOnly>

    <ClientOnly>
      <BaseOffcanvas v-model="sizeGuide" />
    </ClientOnly>

    <ClientOnly>
      <BaseModal v-model="availabilityModal">
        <h2 class="text-2xl font-semibold mb-3">
          La taille "{{ selectedSize }}" n'est plus en stock
        </h2>

        <p class="font-light">
          Renseignes ton adresse e-mail dans le champ 
          ci-dessous pour être averti lorsque cet article est 
          de retour en stock
        </p>

        <form class="mt-4" @submit.prevent>
          <BaseInput v-model="emailForAvailability" input-type="email" class="w-full block" placeholer="Addresse email" />
          <BaseButton color="primary" class="w-full block">
            S'inscrire
          </BaseButton>
        </form>
      </BaseModal>
    </ClientOnly>

    <ClientOnly>
      <BaseModal v-model="showCart">
        <BaseCard>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis 
          porro quasi adipisci similique tempore accusamus cupiditate magnam ipsa repellat. 
          Possimus molestias voluptas ipsam iste quisquam distinctio minus, delectus aperiam.
        </BaseCard>
      </BaseModal>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import type { Product, ProductImage } from '~/types'

const { currentProduct } = storeToRefs(useTemplates())

const selectedImage = ref<ProductImage>()
const showCart = ref(false)
const zoomImage = ref(false)
const sizeGuide = ref(false)
const availabilityModal = ref(false)
const emailForAvailability = ref('')
const selectedSize = ref('')
const recommendations = ref<Product[]>(products)

const isLargeScreen = useMediaQuery('(min-width: 320px)')
const { y } = useScroll(window)
const { id } = useRoute().params

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

if (error.value) {
  createError(error.value)
}

const sizeObject = computed(() => {
  if (currentProduct.value) {
    return currentProduct.value.sizes.find(x => x.name === selectedSize.value) || null
  } else {
    return null
  }
})
const showBanner = computed(() => y.value >= 1200 && y.value <= 2100)
const isLoading = computed(() => status.value === 'pending')
const sizeNames = computed(() => {
  if (currentProduct.value) {
    return currentProduct.value.sizes.map(x => x.name)
  } else {
    return []
  }
})

function handleSelectImage(image: ProductImage) {
  selectedImage.value = image
  zoomImage.value = true
}
</script>
