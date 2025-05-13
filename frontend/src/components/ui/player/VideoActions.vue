<template>
  <div class="absolute bottom-1/12 mx-auto left-0 z-50 w-full p-2" data-slot="video-actions">
    <div class="max-w-2xl mx-auto bg-accent/50 p-5 rounded-md relative">
      <slot />
      
      <div class="grid grid-cols-2">
        <div class="col-span-2 py-2">
          <Slider v-model="sliderCurrentTime" :min="0" :max="duration" :step="0.1" class="px-2" />
        </div>
        
        <div class="flex gap-2">
          <Button v-if="isPlaying" variant="ghost" @click="emit('play-pause')">
            <Pause />
          </Button>
          <Button v-else variant="ghost" @click="emit('play-pause')">
            <Play />
          </Button>
          
          <Button variant="ghost" @click="emit('rewind')">
            <Rewind />
          </Button>

          <Button variant="ghost" @click="emit('fast-forward')">
            <FastForward />
          </Button>

          <div class="px-4 py-2 flex">
            {{ currentTimeFormatted }} - {{ durationFormatted }}
          </div>
        </div>

        <div class="flex justify-end">
          <Button variant="ghost" @click="emit('action', 'volume')">
            <VolumeOff v-if="isMuted" />
            <Volume v-else />
          </Button>

          <Button variant="ghost" @click="emit('action', 'more')">
            <Settings />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '../button'
import { Pause, Play, FastForward, Rewind, Volume, VolumeOff, Settings } from 'lucide-vue-next'

import type { Action } from '../player'

const emit = defineEmits({
  action(_name: Action) {
    return true
  },
  'play-pause'() {
    return true
  },
  rewind() {
    return true
  },
  'fast-forward'() {
    return true
  },
  'update:CurrentTime'(_value: number[]) {
    return true
  }
})

const isPlaying = inject<Ref<boolean>>('isPlaying')
const duration = inject<Ref<number>>('duration')
const currentTime = inject<Ref<number>>('currentTime')
const volume = inject<Ref<number[]>>('volume')

const isMuted = computed(() => {
  return volume?.value[0] === 0
})

/**
 * Computed property that takes the current time
 * and is able to set the current 
 */
const sliderCurrentTime = computed({
  get: () => {
    const value = currentTime?.value || 0
    return [value]
  },
  set: (value) => {
    currentTime.value = value
    emit('update:CurrentTime', value)
  }
})


/**
 * Formats the time to a human readable
 * format for the user to track the
 * time at which the video is currently at
 * 
 * @param value The time value to format
 */
 function formatTime (value: number) {
  const hours = Math.floor(value / 3600)
  const minutes = Math.floor((value % 3600) / 60)
  const seconds = Math.floor(value % 60)

  // console.log('value', value, hours, minutes, seconds)

  const formattedHours = hours < 10 ? '0' + hours : hours
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  } else {
    return `${formattedMinutes}:${formattedSeconds}`
  }
}

const durationFormatted = computed(() => {
  if (duration?.value) {
    return formatTime(duration.value)
  } else {
    return '00:00'
  }
})

const currentTimeFormatted = computed(() => {
  if (currentTime?.value) {
    return formatTime(currentTime.value)
  } else {
    return '00:00'
  }
})
</script>
