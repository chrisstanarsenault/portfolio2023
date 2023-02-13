<template>
  <nav class="w-full flex justify-between items-center px-6 md:px-10 lg:px-12 h-24 backdrop-blur-sm fixed">
    <a href="#intro" class="text-accent text-3xl p-2 border border-accent rounded-full">CA</a>

    <span>
      <ol class="flex space-x-8 items-center">
        <span v-for="link in links" :key="link.label" class="flex space-x-8 items-center">
          <NavLink :href="link.href" :preLabel="link.preLabel">
            {{ link.label }}
          </NavLink>
        </span>

        <li>
          <button
            class="border border-accent rounded-md px-3 py-4 tracking-widest text-accent hover:bg-accent/10 transition-colors duration-300">
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
    href: '#work',
    preLabel: '02.',
    label: 'Work'
  },
  {
    href: '#projects',
    preLabel: '03.',
    label: 'Experience'
  },
  {
    href: '#contact',
    preLabel: '04.',
    label: 'Contact'
  },
]
</script>
