<template>
  <div class="space-y-4 h-full">
    <div class="space-y-2">
      <div>
        <h4 class="text-2xl">
          {{ companyDetails.title }} - {{ companyDetails.name }}
        </h4>
        <h5 class="text-sm text-gray-300">
          {{ companyDetails.date }}
        </h5>
      </div>

      <div>
        <span>{{ companyDetails.stack.join(', ') }}</span>
      </div>
    </div>


    <ul class="space-y-2 max-h-20">
      <ListItem
        v-for="item in companyDetails.points"
        :key="item"
      >
        <div class="flex gap-x-4 leading-snug">
          <BulletPoint class="w-4 h-4 stroke-accent mt-1" />
          <span class="max-w-xl inline-block">{{ item }}</span>
        </div>
      </ListItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

import BulletPoint from '#components/icons/bullet-point'
import ListItem from '#components/list-item'

interface CompanyDetails {
  title: string,
  name: string,
  date: string,
  stack: string[],
  points: string[]
}

defineProps({
  companyDetails: {
    type: Object as PropType<CompanyDetails>,
    required: true,
  },
})
</script>
