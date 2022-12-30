<template>
  <li>
    <a :href="href" class="space-x-2">
      <span>{{ preLabel }}</span>
      <span>
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
