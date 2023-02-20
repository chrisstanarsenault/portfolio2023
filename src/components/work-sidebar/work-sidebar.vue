<template>
  <ul>
    <li v-for="(company, index) in companies" :key="company" class="border-l-2 p-4 group hover:bg-white/5"
      :class="index === selectedCompanyIndex ? 'border-accent' : ''">
      <button @click="selectCompany(index)" class="group-hover:text-accent"
        :class="index === selectedCompanyIndex ? 'text-accent' : ''">
        {{ company }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue'

defineProps({
  companies: {
    type: Array as PropType<string[]>,
    required: true
  },
})

const selectedCompanyIndex = ref(0)

const emits = defineEmits(['companyIndex'])

const selectCompany = (index: number) => {
  selectedCompanyIndex.value = index

  emits('companyIndex', index)
}
</script>
