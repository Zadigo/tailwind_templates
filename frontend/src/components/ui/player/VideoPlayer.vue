<template>
  <div class="relative">
    <video ref="videoEl" class="rounded-md cursor-pointer" preload="metadata" controlslist="nodownload" oncontextmenu="return false;" @loadedmetadata="handleLoadMetadata" @click="emit('play-pause')">
      <source src="/vid1.mp4" type="video/mp4" class="aspect-square object-fill w-full h-full">
      Your browser does not support the video tag.
    </video>

    <slot />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits({
  'play-pause'() {
    return true
  }
})

const videoEl = useTemplateRef('videoEl')

const duration = ref<number>(0)
const currentTime = ref<number>(0)
const volume = ref<number>(0.5)

function handleLoadMetadata(e: Event) {
  if (videoEl.value) {
    if (!Number.isNaN(videoEl.value.duration)) {
      console.log(e)
      duration.value = videoEl.value.duration
      currentTime.value = videoEl.value.currentTime
      volume.value = videoEl.value.volume
    }
  }
}

defineExpose({
  videoEl
})
</script>
