<template>
  <div class="py-20 px-2 border-t-2 border-gray-50 bg-white lg:p-20">
    <div class="grid grid-cols-1 grid-rows-2 text-center lg:text-left lg:grid-cols-2 lg:grid-rows-1 lg:auto-cols-min">
      <div class="order-1">
        <NuxtLink to="/" class="block">
          <img src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-10 aspect-square object-contain">
        </NuxtLink>

        <div id="newsletter" class="mt-5">
          <form @submite.prevent>
            <p class="font-bold">Abonnez-vous à notre newsletter</p>
            <BaseInput v-model="newsletter" placeholder="Mon email" input-type="email" />
            <p class="mt-5 font-light w-3/4">  
              En vous inscrivant, vous acceptez qu'Etam traite vos données personnelles, 
              conformément à sa <NuxtLink to="/" class="underline underline-offset-4 text-blue-400 transition-all duration-300 hover:md:text-blue-600">Charte de Confidentialité</NuxtLink>, aux fins de vous adresser des communications commerciales. 
              Vous pouvez à tout moment vous désabonner, en cliquant sur le lien "se désinscrire" 
              figurant en bas de chaque e-mail.
            </p>
          </form>
        </div>
      </div>

      <div :class="`grid gap-x-30 order-2 lg:grid-cols-${numberOfItems}`">
        <div v-for="section in items?.sections" :key="section.name">
          <p class="font-semibold mb-3">
            {{ section.name }}
          </p>

          <ul class="font-light">
            <li v-for="link in section.links" :key="link.name" class="mb-1">
              <NuxtLink :to="link.to">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t-2 my-10 border-gray-50"></div>

    <div class="flex flex-col justify-center lg:flex-row lg:justify-between">
      <div class="mb-5 text-center lg:m-0">
        © 2024 Your Company, Inc. All rights reserved.
      </div>

      <div class="inline-flex gap-5 justify-center text-slate-700">
        <a href="#" class="block">
          <Icon name="fa-brands:instagram" size="27" />
        </a>

        <a href="#" class="block">
          <Icon name="fa-brands:facebook" size="27" />
        </a>

        <a href="#" class="block">
          <Icon name="fa-brands:tiktok" size="27" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Footer } from '~/data/footer'

const props = defineProps({
  items: {
    type: Object as PropType<Footer>
  }
})

const newsletter = ref('')

const numberOfItems = computed(() => props.items?.sections.length || 0)
</script>
