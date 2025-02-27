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
    </BaseNavbar>

    <slot />
    
    <BaseFooter :items="items" class="mt-20" />
  </section>
</template>

<script setup lang="ts">
import { footerData as items } from '~/data/footer';
</script>
