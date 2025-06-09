<script setup lang="ts">
const {
  completions,
  currentCycle,
} = usePomodoro()
</script>

<template>
  <dl class="space-y-2 text-sm/6">
    <div class="flex flex-col md:flex-row justify-between gap-x-6 gap-y-2 md:gap-y-0 items-center;">
      <dt class="flex-auto font-semibold mx-auto">
        Current cycle
      </dt>
      <dd class="transition-transform shrink-0 flex justify-center items-center space-x-2">
        <img
          v-for="n in 4"
          :key="n"
          class="size-6"
          src="~/assets/images/schroddy.png"
          :class="{ grayscale: n > currentCycle }"
          alt="Logo of Schrödinger Hat"
        >
      </dd>
    </div>
    <div class="flex flex-col md:flex-row justify-between gap-x-6 gap-y-2 md:gap-y-0 items-center;">
      <dt class="flex-auto font-semibold mx-auto">
        Completed PomoCats
      </dt>
      <dd class="shrink-0 sm:flex sm:flex-col md:items-end mx-auto">
        {{ completions }}
      </dd>
    </div>
  </dl>
</template>
