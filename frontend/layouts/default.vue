<template>
  <section id="site">
    <BaseNavbar class="mb-20">
      <div class="mx-10">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="font-bold uppercase text-lg">
            My website
          </NuxtLink>

          <div class="flex gap-2">
            <BaseNavbarlink is-button>
              Link #1
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

    <div class="mx-auto px-20">
      <slot />
    </div>
  </section>
</template>
