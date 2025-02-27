<template>
  <section id="home">
    <BaseCard title="Inputs" class="mb-3">
      <BaseCardbody>
        <div class="flex gap-2">
          <BaseInput v-model="search" />

          <BaseSelect v-model="search" :items="items" />

          <BaseAutocomplete v-model="search" :items="items" />
        </div>
      </BaseCardbody>   
    </BaseCard>

    <BaseCard title="Buttons">
      <BaseCardbody>
        <div class="flex gap-2">
          <BaseButton>Press me</BaseButton>

          <BaseButton>
            Dropdown
            
            <template #dropdown="{ isOpen }">
              <BaseDropdown :is-open="isOpen">
                <BaseList>
                  <BaseListitem>
                    Option #1
                  </BaseListitem>

                  <BaseListitem>
                    Option #2
                  </BaseListitem>
                </BaseList>
              </BaseDropdown>
            </template>
          </BaseButton>
        </div>
      </BaseCardbody>
    </BaseCard>
  </section>
</template>

<script setup lang="ts">
const search = ref('')
const items = ['Kendall', 'Bella', 'Gigie', 'Naomi']
</script>
