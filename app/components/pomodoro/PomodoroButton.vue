<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <Button class="md:w-auto md:min-w-20 mt-2 min-w-20 leading-none">
    <BaseIcon
      v-if="icon"
      class="size-5"
      :icon
    />
    <slot />
  </Button>
</template>
