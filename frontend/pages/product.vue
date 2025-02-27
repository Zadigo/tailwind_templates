<template>
  <section id="product">
    <div class="grid grid-cols-12 grid-row-1 w-full gap-5">

        <!-- Images -->
      <div class="grid grid-cols-2 grid-rows-3 gap-1 col-span-8">
        <div id="image">
          <img src="/ecommerce/dress1.jpg" alt="">
        </div>
        <div id="image">
          <img src="/ecommerce/dress2.jpg" alt="">
        </div>
        <div id="image">
          <img src="/ecommerce/dress3.jpg" alt="">
        </div>
        <div id="image">
          <img src="/ecommerce/dress4.jpg" alt="">
        </div>
        <div id="image">
          <img src="/ecommerce/dress5.jpg" alt="">
        </div>
        <div id="image">
          <img src="/ecommerce/dress4.jpg" alt="">
        </div>
      </div>
      
      <div class="col-span-4 px-10">
        <h1 class="text-xl mt-5 font-semibold">
          Mini-robe encolure drapée
        </h1>

        <p class="font-semibold">
          19.99€
        </p>

        <p class="font-light text-sm my-5">
          Bleu · Réf.. 0544/360/400
        </p>

        <div class="border-t-2 border-gray-100 my-5 me-10" />

        <div id="sizes" class="inline-flex gap-2 mb-4">
          <button type="button" class="rounded-full w-10 h-10 bg-gray-50 text-sm font-normal">
            XS
          </button>
          <button type="button" class="rounded-full w-10 h-10 bg-gray-50 text-sm font-normal">
            S
          </button>
        </div>

        <p class="font-light">Taille et hauteur du mannequin : S · 178 cm</p>
        <NuxtLink to="#" class="text-sm font-semibold underline underline-offset-2 block mt-2" @click="sizeGuide=true">
          Guide des tailles
        </NuxtLink>

        <BaseButton class="mt-10">Ajouter au panier</BaseButton>

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
      </div>

    </div>

    <div id="recommendations" class="mt-20">
      <h3 class="text-2xl font-bold text-center mb-5">
        Cela peut t'intéresser
      </h3>

      <div class="grid grid-rows-12 lg:grid-rows-1 lg:grid-cols-5 lg:gap-1">
        <BaseEcommercecard v-for="i in 4" :key="i" :src="`/ecommerce/img${i}.jpg`" />
      </div>
    </div>

    <BaseModal v-model="show" />
    <BaseOffcanvas v-model="sizeGuide" />
  </section>
</template>

<script setup lang="ts">
const show = ref(false)
const sizeGuide = ref(false)

const isLargeScreen = useMediaQuery('(min-width: 320px)')
</script>
