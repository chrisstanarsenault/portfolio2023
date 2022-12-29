<template>
  <div class="h-full">
    <Header />

    <main class="text-white max-w-layout mx-auto w-full px-6 md:px-24 lg:px-40">
      <!-- Intro -->
      <section id="intro" class="space-y-6 min-h-screen w-full mx-auto flex flex-col justify-center">
        <p>Hello wor.... I mean, oh hey! I'm</p>

        <div class="space-y-2">
          <h1 class="text-4xl md:text-6xl lg:text-7xl">Chris Arsenault.</h1>
          <h2 class="text-4xl md:text-6xl lg:text-7xl text-gray-300">I'm a frontend developer.</h2>
        </div>

        <p class="max-w-2xl">I'm a software engineer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '#layouts/header'
</script>
