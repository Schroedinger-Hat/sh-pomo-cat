<script setup lang="ts">
import SHLogo from '~/assets/svg/sh-logo.svg'

const {
  completions,
  isActive,
  pause,
  reset,
  start,
  timeLeft,
} = usePomodoro()

function handleTimerInteraction() {
  if (isActive.value) {
    pause()
  }
  else {
    start()
  }
}
</script>

<template>
  <div class="min-h-dvh flex flex-col antialiased font-display">
    <header class="h-16 border-b flex justify-center items-center p-6">
      <div class="mr-auto flex justify-center items-center gap-x-2">
        <SHLogo class="size-8" />
        <p class="font-medium text-lg leading-none">
          Schrödinger Pomo Cat
        </p>
      </div>
      <nav class="flex gap-x-2">
        <CtaIcon
          as-child
          icon="logo-github"
          is-anchor
          target="_blank"
          to="https://github.com/schroedinger-hat"
        />
        <CtaColorMode />
      </nav>
    </header>
    <main class="mx-auto bg-background max-w-2xl w-full container grid grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1">
      <div class="flex justify-start items-center flex-col md:items-start p-6">
        <p class="text-7xl tabular-nums">
          {{ timeLeft }}
        </p>
        <SCButton class="w-full md:w-auto md:min-w-20 mt-2 min-w-20 leading-none" @click="handleTimerInteraction">
          {{ isActive ? 'Pause' : 'Start' }}
        </SCButton>
      </div>
      <div class="p-6">
        <p class="text-center text-xl">
          Completed pomos: {{ completions }}
        </p>
      </div>
    </main>
  </div>
</template>
