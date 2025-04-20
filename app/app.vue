<script setup lang="ts">
import SHLogo from '~/assets/svg/sh-logo.svg'

const headerRef = useTemplateRef('header')
const { height: headerHeight } = useElementBounding(headerRef)
const { height: windowHeight } = useWindowSize()

const contentHeight = computed(() => windowHeight.value - headerHeight.value)

const {
  completions,
  currentCycle,
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
  <div class="min-h-dvh flex flex-col antialiased font-display ">
    <header ref="header" class="h-16 border-b flex justify-center items-center p-6">
      <div class="mr-auto flex justify-center items-center gap-x-2">
        <SHLogo class="size-8" />
        <p class="font-medium text-lg leading-none">
          Schrödinger PomoCat
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
    <div :style="{ height: `${contentHeight}px` }" class="relative">
      <PhysicsTest class="absolute inset-0 -z-10" />
      <main class="mx-auto bg-transparent max-w-4xl w-full container grid grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 p-6 md:gap-10">
        <div class="flex justify-start items-center flex-col md:items-start p-6">
          <p class="text-7xl tabular-nums text-center w-full">
            {{ timeLeft }}
          </p>
          <div class="flex justify-center items-center gap-x-2 md:w-full">
            <Button class="w-full md:w-auto md:min-w-20 mt-2 min-w-20 leading-none" @click="handleTimerInteraction">
              {{ isActive ? 'Pause' : 'Start' }}
            </Button>
            <Button class="w-full md:w-auto md:min-w-20 mt-2 min-w-20 leading-none" @click="reset">
              Reset
            </Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle class="flex justify-between items-center relative">
              <p>Current cycle</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex justify-center items-center">
              <span>Completed PomoCats: {{ completions }}</span>
              <span>Current cycle: {{ currentCycle }}</span>
              <span />
              <div class="size-8 ml-2 ">
                <img src="~/assets/images/schroddy.png" alt="Schrödinger Pomo Cat" class="hidden md:block w-full h-full object-fit rounded-lg shadow-lg">
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  </div>
</template>
