<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <Icon :name="`carbon:${icon}`" />
</template>
