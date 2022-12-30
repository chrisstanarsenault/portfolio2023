<template>
  <nav class="w-full flex justify-between items-center px-6 md:px-10 lg:px-12 h-24 backdrop-blur-sm fixed text-white">
    <a href="#intro" class="text-white text-3xl p-2 border border-white rounded-full">CA</a>

    <span>
      <ol class="flex space-x-8 items-center">
        <span v-for="link in links" :key="link.label" class="flex space-x-8 items-center">
          <NavLink :href="link.href" :preLabel="link.preLabel">
            {{ link.label }}
          </NavLink>
        </span>

        <li>
          <button class="border border-white rounded-md px-3 py-4 tracking-widest">
            Resume
          </button>
        </li>
      </ol>
    </span>
  </nav>
</template>

<script setup lang="ts">
import NavLink from '#components/nav-link'

const links = [
  {
    href: '#about',
    preLabel: '01.',
    label: 'About'
  },
  {
    href: '#experience',
    preLabel: '02.',
    label: 'Experience'
  },
  {
    href: '#work',
    preLabel: '03.',
    label: 'Work'
  },
  {
    href: '#contact',
    preLabel: '04.',
    label: 'Contact'
  },
]
</script>
