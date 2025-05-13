<template>
  <div data-slot="video-root" class="relative" @mouseenter="handleHover" @mouseleave="handleHover">
    <video ref="videoEl" class="rounded-md cursor-pointer" preload="metadata" controlslist="nodownload" oncontextmenu="return false;" @timeupdate="updateDetails" @loadedmetadata="handleLoadMetadata" @click="handlePlayPause">
      <source src="/vid1.mp4" type="video/mp4" class="aspect-square object-fill w-full h-full">
      Your browser does not support the video tag.
    </video>

    <VideoOverlay>
      <VideoOverlayMoreVideos @load-video="handleLoadVideo" />
    </VideoOverlay>

    <Transition enter-active-class="animate-in fade-in" leave-active-class="animate-out fade-out">
      <VideoActions v-if="showControls" @rewind="handleRewind" @fast-forward="handleFastForward" @play-pause="handlePlayPause" @action="handleActions" @update:current-time="handleUpdateCurrentTime">
        <Transition enter-active-class="animate-in zoom-in-10 animate-fade-in" leave-active-class="animate-out zoom-out-10 animate-fade-out">
          <VideoPanelVolume v-if="showVolume" @close="showVolume=false" />
          <!-- v-model="volume" -->
        </Transition>

        <Transition enter-active-class="animate-in zoom-in-10" leave-active-class="animate-out zoom-out-10">
          <VideoPanelMore v-if="showActions" />
        </Transition>
      </VideoActions>
    </Transition>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Action } from '../player'

interface Metadata {
  duration: number
  currentTime: number
}

const emit = defineEmits({
  'play-pause'() {
    return true
  },
  metadata(_data: Metadata) {
    return true
  }
})

const videoEl = useTemplateRef('videoEl')

const isPlaying = ref<boolean>(false)
const isLoading = ref<boolean>(true)
const wasPlayed = ref<boolean>(false)

const duration = ref<number>(0)
const currentTime = ref<number>(0)
const volume = ref<number[]>([0.5])

const speed = ref<string>('1x')
const quality = ref<string>('1080p')

const showControls = ref<boolean>(true)
const showVolume = ref<boolean>(false)
const showActions = ref<boolean>(false)

provide('isPlaying', isPlaying)
provide('duration', duration)
provide('currentTime', currentTime)
provide('volume', volume)

watch(volume, (newValue) => {
  if (videoEl.value) {
    videoEl.value.volume = newValue[0]
  }
})

/**
 * Indicates that tne play was ended. The total
 * duration is equal to the current time
 */
const hasEnded = computed(() => {
  return currentTime.value === duration.value
})

provide('hasEnded', hasEnded)

/**
 * Return to the start of the video if the video
 * has ended otherwise, rewind to a given time
 */
function handleRewind() {
  if (videoEl.value) {
    if (hasEnded.value) {
      videoEl.value.currentTime = 0
    } else {
      videoEl.value.currentTime -= 5
    }
  }
}

/**
 * Fast forward the video by 5
 */
function handleFastForward() {
  if (videoEl.value) {
    if (hasEnded.value) {
      // Pass
    } else {
      videoEl.value.currentTime += 5
    }
  }
}

/**
 *
 * @param action The action to trigger
 */
function handleActions(action: Action) {
  if (action === 'volume') {
    showActions.value = false
    showVolume.value = !showVolume.value
  }

  if (action ===  'more') {
    showVolume.value = false
    showActions.value = !showActions.value
  }
}

/**
 * 
 */
function handleHover() {
  // showControls.value = !showControls.value
}

/**
 * Continuously updates the currentTime ref
 * when the videos current time changes
 */
function updateDetails() {
  if (videoEl.value) {
    currentTime.value = videoEl.value.currentTime
  }
}

/**
 *
 */
function handleLoadMetadata(e: Event) {
  if (videoEl.value) {
    if (!Number.isNaN(videoEl.value.duration)) {
      console.log(e)
      duration.value = videoEl.value.duration
      currentTime.value = videoEl.value.currentTime
      volume.value = [videoEl.value.volume]
      isLoading.value = false
    }
  }
}

/**
 *
 */
function handlePlayPause() {
  if (videoEl.value) {
    if (videoEl.value.paused) {
      videoEl.value.play()
    } else {
      videoEl.value.pause()
    }

    if (!wasPlayed.value) {
      wasPlayed.value = true
    }
    
    isPlaying.value = !isPlaying.value
    emit('play-pause')
  }
}

/**
 * 
 * @param value 
 */
function handleUpdateCurrentTime(value: number) {
  if (videoEl.value) {
    videoEl.value.currentTime = value
  }
}

/**
 * Changes the current source to another video source
 * 
 * @param value The url or path to the video to play
 */
function handleLoadVideo(value: string) {
  if (videoEl.value) {
    // Pass
  }
}

onMounted(() => {
  emit('metadata', {
    duration: duration.value,
    currentTime: currentTime.value
  })
})
</script>
