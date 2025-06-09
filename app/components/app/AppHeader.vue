<script setup lang="ts">
import SHLogo from '~/assets/svg/sh-logo.svg'
</script>

<template>
  <header
    class="h-16 border-b flex justify-center items-center p-6"
  >
    <div class="mr-auto flex justify-center items-center gap-x-2">
      <SHLogo class="size-8" />
      <h1 class="font-medium text-sm md:text-lg leading-none">
        Schrödinger PomoCat
      </h1>
    </div>
    <nav class="flex gap-x-2">
      <CtaIcon
        aria-label="Redirects to github"
        as-child
        icon="logo-github"
        is-anchor
        target="_blank"
        to="https://github.com/schroedinger-hat"
      />
      <CtaColorMode />
    </nav>
  </header>
</template>
