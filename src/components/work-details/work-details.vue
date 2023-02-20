<template>
  <div>
    <div>
      <h4>{{ companyDetails.title }}</h4>
      <h5>{{ companyDetails.name }}</h5>
      <h5>{{ companyDetails.date }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

defineProps({
  companyDetails: {
    type: Array as PropType<any>,
    required: true
  },
})
</script>
