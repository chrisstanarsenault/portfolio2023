<template>
  <div>
    <h4>
      {{ title }}
    </h4>

    <slot />

    <ul
      v-for="item in stack"
      :key="item"
    >
      <li>{{ item }}</li>
    </ul>

    <div v-if="githubLink">
      Replace me
    </div>

    <div v-if="liveLink">
      Replace me
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },

  stack: {
    type: Array as PropType<string[]>,
    required: true,
  },

  githubLink: {
    type: String,
    default: '',
  },

  liveLink: {
    type: String,
    default: '',
  },

  projectImage: {
    type: String,
    required: true,
  },
})
</script>
