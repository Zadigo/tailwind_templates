<template>
  <section id="site">
    <BaseNavbar>
      <div class="mx-10">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="font-bold uppercase text-lg">
            My website
          </NuxtLink>

          <div class="flex gap-2">
            <BaseNavbarlink to="/cards">
              Cards
            </BaseNavbarlink>

            <BaseNavbarlink to="#" @click="showLargeMenu=true">
              Large menu
            </BaseNavbarlink>

            <BaseButton>
              Link #2
              
              <template #dropdown="{ isOpen }">
                <BaseDropdown :is-open="isOpen">
                  <BaseList>
                    <BaseListitem>
                      First
                    </BaseListitem>
                    <BaseListitem>
                      Second
                    </BaseListitem>
                  </BaseList>
                </BaseDropdown>
              </template>
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Menu -->
      <BaseEcommerceLargeMenu :show="showLargeMenu" @close="showLargeMenu=false">
        <div class="grid grid-cols-12">
          <div class="col-span-2 flex">
            <ul class="self-center text-2xl font-normal">
              <li class="p-1">
                <NuxtLink to="/" class="transition-all ease-in-out duration-200 underline-offset-3 hover:font-semibold">
                  Nouveautés
                </NuxtLink>
              </li>
              <li class="p-1">
                <NuxtLink to="#" class="transition-all ease-in-out duration-200 underline-offset-3 hover:font-semibold" @click="showSublinks=!showSublinks">
                  Vêtments
                </NuxtLink>
              </li>
              <li class="p-1">
                <NuxtLink to="/" class="transition-all ease-in-out duration-200 underline-offset-3 hover:font-semibold">
                  Chaussures
                </NuxtLink>
              </li>
              <li class="p-1">
                <NuxtLink to="/" class="transition-all ease-in-out duration-200 underline-offset-3 hover:font-semibold">
                  Accessoires
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="col-span-10">
            <div v-if="!showSublinks" id="photos">
              <div class="flex justify-end mb-2">
                <NuxtLink to="/" class="underline underline-offset-2 text-sm">
                  Afficher tout <Icon name="fa:arrow-right" size="9" />
                </NuxtLink>
              </div>

              <div class="flex gap-2">
                <div v-for="i in 4" :key="i" id="collection-wrapper" class="relative overflow-hidden rounded-md">
                  <NuxtLink to="/" class="block">
                    <img src="/ecommerce/dress1.jpg" alt="" class="aspect-square object-cover object-center h-50 transition-opacity ease-in-out hover:opacity-80" width="250">
                    <div class="text-white text-center absolute bottom-2 w-full">
                      <p class="uppercase font-bold">
                        Collection name
                      </p>
                      <NuxtLink class="text-sm block text-center underline">
                        Découvrir
                      </NuxtLink>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div v-else id="sub-links">
              <div v-for="i in 3" :key="i" class="flex flex-wrap flex-col p-2 max-h-15 hover:underline">
                <NuxtLink to="/" class="w-full inline-flex gap-3 align-middle">
                  <img src="/ecommerce/img1.jpg" alt="" width="50" class="rounded-full aspect-square object-cover object-center">
                  <div class="flex font-normal h-full">
                    <p class="text-center">Collection 1</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </BaseEcommerceLargeMenu>
    </BaseNavbar>


    <slot />
    
    <BaseFooter :items="items" class="mt-20" />
  </section>
</template>

<script setup lang="ts">
import { footerData as items } from '~/data/footer';

const showLargeMenu = ref(false)
const showSublinks = ref(false)
</script>
