<template>
  <Avatar>
    <AvatarImage v-bind="props" />
    <slot />
  </Avatar>
</template>

<script setup lang="ts">
import { AvatarImageProps } from 'reka-ui';
import { Avatar, AvatarImage } from '../avatar'

const props = defineProps<AvatarImageProps>()
</script>
