<script setup lang="ts">
import type { MatterPhysics } from '#components'
import SHLogo from '~/assets/svg/sh-logo.svg'

type PhysicsComponent = InstanceType<typeof MatterPhysics>

const headerRef = useTemplateRef('header')
const physicsRef = useTemplateRef<PhysicsComponent>('physics')
const { height: headerHeight } = useElementBounding(headerRef)
const { height: windowHeight } = useWindowSize()
const contentHeight = computed(() => windowHeight.value - headerHeight.value)

const {
  isBreak,
  completions,
  currentCycle,
  isActive,
  pause,
  reset,
  start,
  timeLeft,
  skip,
} = usePomodoro()

function handleTimerInteraction() {
  isActive.value ? pause() : start()
}

useHead({
  title: () => `${timeLeft.value} | Schrödinger PomoCat`,
})

useSeoMeta({
  ogTitle: 'Schrödinger PomoCat',
  ogDescription: 'A pomodoro app with a physics twist',
})
</script>

<template>
  <div class="min-h-dvh flex flex-col antialiased font-display ">
    <header
      ref="header"
      class="h-16 border-b flex justify-center items-center p-6"
    >
      <div class="mr-auto flex justify-center items-center gap-x-2">
        <SHLogo class="size-8" />
        <p class="font-medium text-sm md:text-lg leading-none">
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
    <div
      :style="{ height: `${contentHeight}px` }"
      class="relative"
    >
      <MatterPhysics
        ref="physics"
        class="absolute inset-0 z-10"
        :class="{ 'z-30': physicsRef?.isDragging }"
      />
      <main class="mx-auto bg-transparent max-w-4xl w-full container p-6 z-20 relative">
        <Card class="w-full">
          <CardContent class="grid grid-cols-12 md:gap-10 gap-4 divide-y md:divide-y-0 md:divide-x">
            <div class="col-span-12 md:col-span-6 w-full pb-4 md:pb-0 space-y-3">
              <div class="w-full">
                <Badge
                  variant="outline"
                  class="mx-auto block"
                >
                  {{ isBreak ? 'Break' : 'Pomodoro' }}
                </Badge>
              </div>
              <p class="text-7xl tabular-nums text-center w-full">
                {{ timeLeft }}
              </p>
              <div class="flex justify-center items-center gap-x-2 w-full">
                <Button
                  class="md:w-auto md:min-w-20 mt-2 min-w-20 leading-none transition-colors bg-green-200 hover:bg-green-300"
                  :class="{ 'bg-red-200 hover:bg-red-300': isActive }"
                  @click="handleTimerInteraction"
                >
                  <BaseIcon
                    :icon="isActive ? 'pause' : 'play'"
                    class="size-5"
                  />
                  <span>{{ isActive ? 'Pause' : 'Start' }}</span>
                </Button>
                <Button
                  v-if="isActive"
                  class="md:w-auto md:min-w-20 mt-2 min-w-20 leading-none"
                  @click="reset"
                >
                  <BaseIcon
                    icon="restart"
                    class="size-5"
                  />
                  Reset
                </Button>
                <Button
                  class="md:w-auto md:min-w-20 mt-2 min-w-20 leading-none"
                  @click="skip"
                >
                  <BaseIcon
                    icon="skip-forward"
                    class="size-5"
                  />
                  Skip
                </Button>
              </div>
            </div>
            <dl class="col-span-12 md:col-span-6 content-center space-y-2 text-sm/6">
              <div class="flex flex-col md:flex-row justify-between gap-x-6 gap-y-2 md:gap-y-0 items-center">
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
              <div class="flex flex-col md:flex-row justify-between gap-x-6 gap-y-2 md:gap-y-0 items-center">
                <dt class="flex-auto font-semibold mx-auto">
                  Completed PomoCats
                </dt>
                <dd class="shrink-0 sm:flex sm:flex-col md:items-end mx-auto">
                  {{ completions }}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </main>
    </div>
  </div>
</template>
