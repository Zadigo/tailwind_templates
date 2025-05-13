<template>
  <div ref="videoPanelRef" class="absolute right-0 bottom-1/1 mb-2 p-1 rounded-md bg-accent/80 z-60 min-w-[300px]">
    <Button v-if="selectedSetting" variant="ghost" @click="selectedSetting=null">
      <ArrowLeft />
    </Button>

    <template v-if="selectedSetting==='Speed'">
      <VideoPanelSetting v-for="playbackRate in playbackRates" :key="playbackRate" :setting="playbackRate" @click="emit('setting-value', selectedSetting, playbackRate)" />
    </template>

    <template v-else>
      <VideoPanelSetting v-for="setting in videoSettings" :key="setting" :setting="setting" @select-setting="selectSetting" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { type PlaybackRates, playbackRates, type VideoSettings, videoSettings } from '@/components/player'
import { ArrowLeft } from 'lucide-vue-next'

const emit = defineEmits({
  'setting-value'(_name: VideoSettings, _value: string | number | PlaybackRates) {
    return true
  },
  close() {
    return true
  }
})

const videoPanelRef = useTemplateRef('videoPanelRef')

const selectedSetting = ref<VideoSettings | null>(null)

onClickOutside(videoPanelRef, () => {
  emit('close')
})

/**
 * Display a subelement of the selected setting
 *
 * @param name Name of the setting component to display
 */
function selectSetting(name: VideoSettings) {
  selectedSetting.value = name
}
</script>
