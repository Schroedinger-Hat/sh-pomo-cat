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
  timeLeft,
} = usePomodoro()

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
            <PomodoroCountdown class="col-span-12 md:col-span-6" />
            <PomodoroStats class="col-span-12 md:col-span-6 content-center" />
          </CardContent>
        </Card>
      </main>
    </div>
  </div>
</template>
