<script setup lang="ts">
import type { MatterPhysics } from '#components'

type PhysicsComponent = InstanceType<typeof MatterPhysics>

const physicsRef = useTemplateRef<PhysicsComponent>('physics')

const { timeLeft } = usePomodoro()

useHead({ title: () => `${timeLeft.value} | Schrödinger PomoCat` })

useSeoMeta({
  ogTitle: 'Schrödinger PomoCat',
  ogDescription: 'A pomodoro app with a physics twist',
})
</script>

<template>
  <div class="min-h-dvh flex flex-col antialiased font-display">
    <AppHeader />
    <main class="relative flex-1">
      <MatterPhysics
        ref="physics"
        class="absolute inset-0 z-10"
        :class="{ 'z-30': physicsRef?.isDragging }"
      />
      <section class="mx-auto bg-transparent max-w-4xl w-full container p-6 z-20 relative">
        <Card class="w-full">
          <CardContent class="grid grid-cols-12 md:gap-10 gap-4 divide-y md:divide-y-0 md:divide-x">
            <PomodoroCountdown class="col-span-12 md:col-span-6" />
            <PomodoroStats class="col-span-12 md:col-span-6 content-center" />
          </CardContent>
        </Card>
      </section>
    </main>
  </div>
</template>
