<template>
  <li class="group">
    <a :href="href" class="space-x-2 p-1.5">
      <span class="text-accent">{{ preLabel }}</span>
      <span class="group-hover:text-accent transition-colors duration-300">
        <slot />
      </span>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true
  },

  preLabel: {
    type: String,
    required: true
  },
})
</script>
