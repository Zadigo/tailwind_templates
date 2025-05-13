<template>
  <Card class="mt-5">
    <CardContent>
      <VideoRoot v-model="currentVideoUrl" :video-data="videoData" @load-video="handleLoadVideo">
        <template #default="{ hasEnded, isPlaying, currentTime }">
          <VideoOverlay>
            <VideoOverlayMoreVideos v-show="hasEnded || (currentTime > 0 && !isPlaying)" :videos="moreVideos" @load-video="handleLoadVideo" />
            <!-- <VideoOverlayLabel @load-video="handleLoadVideo" /> -->
          </VideoOverlay>
        </template>
      </VideoRoot>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import type { VideoData, VideoDetail } from '@/components/player'

const videoData = ref<VideoData>({
  src: '/vid1.mp4',
  labels: [
    {
      id: 1,
      time: 4,
      src: '/vid5.mp4'
    }
  ]
})

const moreVideos = ref<VideoDetail[]>([
  {
    id: 1,
    title: 'title 1',
    src: '/vid1.mp4'
  },
  {
    id: 2,
    title: 'title 1',
    src: '/vid2.mp4'
  },
  {
    id: 3,
    title: 'title 1',
    src: '/vid3.mp4'
  },
  {
    id: 4,
    title: 'title 1',
    src: '/vid4.mp4'
  }
])

const currentVideoUrl = ref<string>('/vid3.mp4')

function handleLoadVideo(value: string) {
  currentVideoUrl.value = value
}
</script>
