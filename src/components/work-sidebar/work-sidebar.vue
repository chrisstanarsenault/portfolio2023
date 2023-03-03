<template>
  <div class="flex flex-row md:flex-col h-full">
    <button
      v-for="(company, index) in companies"
      :key="company"
      class="border-b-2 md:border-b-0 md:border-l-2 p-4 hover:bg-white/5 hover:text-accent text-left"
      :class="index === selectedCompanyIndex ? 'border-accent text-accent' : ''"
      @click="selectCompany(index)"
    >
      {{ company }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue'

defineProps({
  companies: {
    type: Array as PropType<string[]>,
    required: true,
  },
})

const selectedCompanyIndex = ref(0)

const emits = defineEmits(['companyIndex'])

const selectCompany = (index: number) => {
  selectedCompanyIndex.value = index

  emits('companyIndex', index)
}
</script>
