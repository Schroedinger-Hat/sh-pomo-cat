<script setup lang="ts">
const {
  completions,
  isActive,
  pause,
  reset,
  start,
  timeLeft,
} = usePomodoro()
</script>

<template>
  <CtaColorMode />
  {{ completions }}
  <SCButton :disabled="isActive" @click="start">
    resume
  </SCButton>
  <SCButton @click="pause">
    pause
  </SCButton>
  <SCButton @click="reset">
    reset
  </SCButton>
  <p>{{ isActive }}</p>
  <div>{{ timeLeft }}</div>
</template>
