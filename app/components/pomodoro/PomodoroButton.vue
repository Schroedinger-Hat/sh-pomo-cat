<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <PomodoroButton class="md:w-auto md:min-w-20 mt-2 min-w-20 leading-none">
    <BaseIcon
      v-if="icon"
      class="size-5"
      :icon
    />
    <slot />
  </PomodoroButton>
</template>
