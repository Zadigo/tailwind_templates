<template>
  <SiteWrapper>
    <section id="page-one">
      <div id="hero">
        <div ref="heroEl" class="w-full h-[80vh] bg-blue-300 flex justify-center items-center bg-cover">
          <div class="mx-auto p-10 text-center">
            <h1 class="text-white uppercase font-bold text-6xl">
              Ride88 truck bike
            </h1>

            <p class="text-white font-3xl my-3">
              E-BIKES - ROAD BIKES - MOUNTAIN BIKES - FAT TIRES - BMX - WE GOT YOU COVERED!
            </p>

            <Button size="lg" class="mt-5 rounded-full">
              Contact us
            </Button>
          </div>
        </div>
      </div>

      <section id="main">
        <div class="grid grid-cols-2 my-5 gap-2 max-w-4xl mx-auto">
          <div v-for="i in 6" :key="i" :style="`background-image: url('img1.jpg');`" class="group p-20 rounded-sm bg-slate-100 bg-center bg-cover transition-all ease-in-out duration-500 md:cursor-pointer md:hover:opacity-70">
            <div class="font-bold text-4xl uppercase text-white text-center md:group-hover:animate-bounce md:group-hover:text-slate-800">
              QR3 pack
            </div>
          </div>

          <div class="col-span-2 grid grid-cols-subgrid">
            <Button variant="outline" size="lg">
              Press me
              <VueIcon icon="fa-solid:arrow-right" />
            </Button>
          </div>
        </div>
      </section>
    </section>
  </SiteWrapper>
</template>

<script setup lang="ts">
const heroEl = useTemplateRef('heroEl')

onMounted(() => {
  if (heroEl.value) {
    heroEl.value.style.backgroundImage = `url('img1.jpg')`
  }
})
</script>
