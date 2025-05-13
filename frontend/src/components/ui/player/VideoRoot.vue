<template>
  <div data-slot="video-root" class="relative min-h-[300px] w-full" @mouseenter="handleHover" @mouseleave="handleHover">
    <!-- <VideoLoader v-if="isLoading" /> -->
    <video ref="videoEl" class="rounded-md cursor-pointer" preload="metadata" controlslist="nodownload" oncontextmenu="return false;" @timeupdate="updateDetails" @loadedmetadata="handleLoadMetadata" @click="handlePlayPause">
      <source :src="currentVideoUrl" type="video/mp4" class="aspect-square object-fill w-full h-full">
      Your browser does not support the video tag
    </video>

    <div class="p-3 bg-yellow-200/70 my-5 rounded-2xl absolute top-1.5 left-1.5 w-[220px]">
      <p>is playing: {{ isPlaying }}</p>
      <p>is loading: {{ isLoading }}</p>
      <p>has ended: {{ hasEnded }}</p>
      <p>was played: {{ wasPlayed }}</p>
      <p>duration: {{ duration }}</p>
      <p>current time: {{ currentTime }}</p>
      <p>volume: {{ volume }}</p>
      <p>show controls: {{ showControls }}</p>
      <p>show volume: {{ showVolume }}</p>
      <p>show settings: {{ showSettings }}</p>
      <p>pct: {{ completionPercentage }}%</p>
      <p>W x H: {{ width }} x {{ height }}</p>
    </div>


    <!-- <VideoOverlay>
      <VideoOverlayMoreVideos v-show="hasEnded" @load-video="handleLoadVideo" />
      <VideoOverlayLabel @load-video="handleLoadVideo" />
    </VideoOverlay> -->

    <slot v-bind:hasEnded="hasEnded" v-bind:currentTime="currentTime" v-bind:isLoading="isLoading" />

    <Transition enter-active-class="animate-in fade-in" leave-active-class="animate-out fade-out">
      <VideoActions v-if="showControls" @rewind="handleRewind" @fast-forward="handleFastForward" @play-pause="handlePlayPause" @action="handleActions" @update:current-time="handleUpdateCurrentTime" @fullscreen="async () => await enter()">
        <Transition enter-active-class="animate-in zoom-in-10 animate-fade-in" leave-active-class="animate-out zoom-out-10 animate-fade-out">
          <VideoPanelVolume v-if="showVolume" @close="showVolume=false" />
          <!-- v-model="volume" -->
        </Transition>

        <Transition enter-active-class="animate-in zoom-in-10" leave-active-class="animate-out zoom-out-10">
          <VideoPanelMore v-if="showSettings" @close="showSettings=false" />
        </Transition>
      </VideoActions>
    </Transition>
    
  </div>
</template>

<script setup lang="ts">
import type { Action, VideoData } from '../player'

interface Metadata {
  duration: number
  currentTime: number
}

const props = defineProps({
  modelValue: {
    type: String
  },
  videoData: {
    type: Object as PropType<VideoData>
  }
})

const emit = defineEmits({
  'play-pause'() {
    return true
  },
  metadata(_data: Metadata) {
    return true
  },
  'update:modelValue'(_value: string) {
    return true
  },
  'load-video'(_value: string) {
    return true
  }
})

const videoEl = useTemplateRef('videoEl')
const { width, height } = useElementSize(videoEl)
const { enter } = useFullscreen(videoEl)

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
const showSettings = ref<boolean>(false)

provide('isPlaying', isPlaying)
provide('duration', duration)
provide('currentTime', currentTime)
provide('volume', volume)

/**
 * Calculates the current completion of the
 * video in percentage on the total duration
 */
 const completionPercentage = computed(() => {
  return Math.floor((currentTime.value / duration.value) * 100)
})

const currentVideoUrl = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
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

watch(volume, (newValue) => {
  if (videoEl.value) {
    videoEl.value.volume = newValue[0]
  }
})

watchDebounced(() => props.modelValue, (newValue) => {
  if (videoEl.value) {
    if (newValue) {
      videoEl.value.src = newValue
    }
  }
}, {
  debounce: 2000,
  maxWait: 5000,
  onTrack() {
    isLoading.value = true
  },
  onTrigger() {
    isLoading.value = false
  }
})

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
    showSettings.value = false
    showVolume.value = !showVolume.value
  }

  if (action ===  'more') {
    showVolume.value = false
    showSettings.value = !showSettings.value
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
    emit('load-video', value)
    videoEl.value.src = value
  }
}

onMounted(() => {
  emit('metadata', {
    duration: duration.value,
    currentTime: currentTime.value
  })
})
</script>
