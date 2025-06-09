<script setup lang="ts">
const {
  isActive,
  isBreak,
  pause,
  reset,
  skip,
  start,
  timeLeft,
} = usePomodoro()

function handleTimerInteraction() {
  isActive.value ? pause() : start()
}
</script>

<template>
  <div class="w-full pb-4 md:pb-0 space-y-3">
    <div class="w-full">
      <Badge
        variant="outline"
        class="mx-auto block"
      >
        {{ isBreak ? 'Break 💆' : 'Pomodoro 🍅' }}
      </Badge>
    </div>
    <h2 class="text-7xl tabular-nums text-center w-full">
      {{ timeLeft }}
    </h2>
    <div class="flex justify-center items-center gap-x-2 w-full">
      <PomodoroButton
        class="transition-colors bg-green-200 hover:bg-green-300 text-black"
        :class="{ 'bg-red-200 hover:bg-red-300': isActive }"
        :icon="isActive ? 'pause' : 'play'"
        @click="handleTimerInteraction"
      >
        <span>{{ isActive ? 'Pause' : 'Start' }}</span>
      </PomodoroButton>
      <PomodoroButton
        v-if="isActive"
        icon="restart"
        @click="reset"
      >
        <span>Reset</span>
      </PomodoroButton>
      <PomodoroButton
        icon="skip-forward"
        @click="skip"
      >
        <span>Skip</span>
      </PomodoroButton>
    </div>
  </div>
</template>
