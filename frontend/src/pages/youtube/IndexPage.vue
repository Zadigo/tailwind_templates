<template>
  <Card class="mt-5">
    <CardContent>
      <VideoRoot v-model="currentVideoUrl" :video-data="videoData" @load-video="handleLoadVideo">
        <template #default="{ hasEnded }">
          <VideoOverlay>
            <VideoOverlayMoreVideos v-show="hasEnded" @load-video="handleLoadVideo" />
            <!-- <VideoOverlayLabel @load-video="handleLoadVideo" /> -->
          </VideoOverlay>
        </template>
      </VideoRoot>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import type { VideoData } from '@/components/player'

const videoData = ref<VideoData>({
  src: '/vid1.mp4',
  labels: [
    {
      id: 1,
      time: 4,
      src: '/vid2.mp4'
    }
  ]
})

const currentVideoUrl = ref<string>('/vid1.mp4')

function handleLoadVideo(value: string) {
  currentVideoUrl.value = value
}
</script>
