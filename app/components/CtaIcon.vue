<script setup lang="ts">
import type { ButtonVariants } from '~/components/ui/button'

const { variant = 'outline' } = defineProps<{
  asChild?: boolean
  icon: string
  isAnchor?: boolean
  to?: string
  variant?: ButtonVariants['variant']
}>()
</script>

<template>
  <Button
    :as-child
    :variant
    class="size-8"
    size="icon"
  >
    <template v-if="asChild && isAnchor">
      <NuxtLink :to="to">
        <BaseIcon :icon />
      </NuxtLink>
    </template>
    <template v-else>
      <BaseIcon :icon />
    </template>
  </Button>
</template>
