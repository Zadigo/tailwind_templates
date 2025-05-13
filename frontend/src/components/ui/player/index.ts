export type Action = 'volume' | 'more'

export const videoSettings = [
  'Captions',
  'Speed',
  'Quality'
] as const

export type VideoSettings = (typeof videoSettings)[number]

export interface VideoData {
  src: string
  ads?: {
    id: number
    time: number
    src: string
  }[]
  labels?: {
    id: number
    time: number
    src: string
  }[]
}

export const playbackRates = [
  0.25,
  0.5,
  1,
  2
] as const

export type PlaybackRates = (typeof playbackRates)[number]
