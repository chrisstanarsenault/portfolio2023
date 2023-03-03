<template>
  <div class="bg-gradient-to-b from-[#0f2027] to-[#203a43] w-full h-full">
    <Header />

    <main class="max-w-layout mx-auto w-full px-6 md:px-24 lg:px-40">
      <!-- Intro -->
      <section
        id="intro"
        class="space-y-6 min-h-screen w-full mx-auto flex flex-col justify-center"
      >
        <p class="text-accent">
          Hello wor.... I mean, oh hey! I'm
        </p>

        <div class="space-y-2 tracking-wider font-semibold">
          <h1 class="text-4xl md:text-6xl lg:text-7xl text-white">
            Chris Arsenault.
          </h1>
          <h2 class="text-4xl md:text-6xl lg:text-7xl text-gray-300">
            I'm a frontend developer.
          </h2>
        </div>

        <p class="max-w-2xl text-lg lg:text-xl">
          I'm a software engineer specializing in building (and
          occasionally
          designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered
          products at Upstatement.
        </p>
      </section>

      <!-- About -->
      <section
        id="about"
        class="space-y-6 w-full mx-auto flex flex-col py-24"
      >
        <div class="flex items-end space-x-4">
          <span class="text-accent text-xl md:text-3xl">01.</span>
          <h3 class="text-2xl md:text-4xl">
            About Me
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10 justify-items-center md:justify-items-stretch">
          <div class="max-w-2xl space-y-2 md:col-span-2">
            <p class="text-lg lg:text-xl">
              Hello! My name is Chris and I enjoy creating things that live on the internet. My interest in web
              development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking
              together a custom reblog button taught me a lot about HTML & CSS!
              <br>
              <br>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge
              corporation, and a student-led design studio. My main focus these days is building accessible, inclusive
              products and digital experiences at Upstatement for a variety of clients.
              <br>
              <br>
              I also recently launched a course that covers everything you need to build a web app with the Spotify API
              using Node & React.
              <br>
              <br>
              Here are a few technologies I've been working with recently:
            </p>

            <ul class="grid grid-cols-2 xl:grid-cols-3 gap-y-2">
              <ListItem
                v-for="item in aboutMeListItems"
                :key="item"
              >
                <span class="flex gap-x-2 items-center">
                  <BulletPoint class="w-4 h-4 stroke-accent" />
                  {{ item }}
                </span>
              </ListItem>
            </ul>
          </div>


          <span class="group flex justify-center w-1/2 md:w-auto aspect-square">
            <img
              :src="profileImage"
              alt="Chris Arsenault standing in front of a brick wall."
              class="rounded-xl group-hover:rounded-full transition-all duration-300 ease-in-out"
            >
          </span>
        </div>
      </section>

      <!-- Work -->
      <section
        id="work"
        class="space-y-6 w-full mx-auto flex flex-col py-24 h-full"
      >
        <div class="flex items-end space-x-4">
          <span class="text-accent text-xl md:text-3xl">02.</span>
          <h3 class="text-2xl md:text-4xl">
            Work Experience
          </h3>
        </div>

        <div class="flex flex-col md:flex-row gap-x-10">
          <WorkSidebar
            :companies="workCompanies"
            class="mb-4 md:mb-0"
            @company-index="selectCompanyDetails"
          />

          <WorkDetails :company-details="workCompanyDetails[currentCompanySelected]" />
        </div>
      </section>

      <!-- Projects -->
      <section
        id="projects"
        class="space-y-6 min-h-screen w-full mx-auto flex flex-col py-24"
      >
        <div class="flex items-end space-x-4">
          <span class="text-accent text-xl md:text-3xl">03.</span>
          <h3 class="text-2xl md:text-4xl">
            Projects
          </h3>
        </div>
      </section>

      <!-- Contact -->
      <section
        id="contact"
        class="space-y-6 min-h-screen w-full mx-auto flex flex-col py-24"
      >
        <div class="flex items-end space-x-4">
          <span class="text-accent text-xl md:text-3xl">04.</span>
          <h3 class="text-2xl md:text-4xl">
            Contact
          </h3>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Header from '#layouts/header'

import ListItem from '#components/list-item'
import BulletPoint from '#components/icons/bullet-point'
import WorkSidebar from '#components/work-sidebar'
import WorkDetails from '#components/work-details'

import profileImage from '#assets/Chris.jpg'

const currentCompanySelected = ref(0)

const aboutMeListItems = [
  'Vue',
  'Vue Router',
  'GraphQL',
  'Typescript',
  'Tailwind',
  'AWS',
  'Javascript',
  'Storybook/Histoire',
  'Jest/Vue Test Utils',
]

const workCompanies = ['Remx', 'Workflow', 'WLS']

const workCompanyDetails = [
  {
    name: 'Remx',
    title: 'Intermediate Frontend Developer',
    date: 'Jan 2022 - Present',
    url: 'https://remx.xyz/',
    stack: ['Vue3', 'JS', 'Typescript', 'Tailwind', 'GraphQL', 'AWS', 'Web3', 'Storybook'],
    points: [
      'Worked alongside and collaborated with designer to make sure pages were pixel perfect, and to discuss potential issues that could arise with design mockups',
      'Worked alongside and collaborated with different stakeholders to implement new features and update existing ones',
      'Utilized GraphQL to make queries/mutation/subscriptions with DynamoDB',
      'Implemented Storybook for component documentation',
      'Utilizing the DeepAR library, implemented an AR environment on a mobile device for users to be able to wear their newly minted clothing tokens',
    ],
  },
  {
    name: 'Workflow',
    title: 'Junior Frontend Developer',
    date: 'Jan 2021 - Jan 2022',
    url: '',
    stack: ['Vue3', 'JS', 'Typescript', 'Tailwind', 'Storybook', 'GraphQL', 'AWS', 'Jest/VTU', 'MJML'],
    points: [
      'Worked with a team of developers to implement the frontend as per designs/requirements',
      'Utilized GraphQL to make queries/mutation/subscriptions with DynamoDB',
      'Developed and maintained our own component (AODA / WCAG compliant) library to use across the site Implemented Storybook into our component library to better help build in isolation as well as help keep components documented',
      'Utilized Jest and Vue-Test-Utils to have solid unit tests for our component library',
      'Utilized Cypress for E2E testing',
      'Used MJML to help with email templates which tied into the backend to create dynamic emails that were used across the application',
    ],
  },
  {
    name: 'World Legal Summit',
    title: 'Fullstack Developer',
    date: 'Mar 2019 - Jan 2021',
    url: 'https://worldlegalsummit.org/',
    stack: ['Wordpress', 'ReactJS', 'Javascript', 'Express', 'NodeJS', 'AWS(Lambda)', 'GoogleAPI/GooglesheetsAPI'],
    points: [
      'General updates and maintenance of the pre-existing website',
      'Customize layouts as per the World Legal Summit\'s needs',
      'Worked directly with each city host (approx 30-40 clients) daily to add new updates and revisions to their individual event pages (adding logos, documents, location details, speaker information, etc)',
      'Implementing any new requested features or software needs such as: 1. Live streaming capabilities for each host location utilizing Youtube, 2. Set up Zendesk and created a custom theme for a knowledge base and community section, 3. Integrated a method to connect the Mailchimp account with separate GoogleSheets to collect signup information for each host, when interested parties requested an invite to their city\'s Summit',
    ],
  },
]

const selectCompanyDetails = (index: number) => {
  currentCompanySelected.value = index
}
</script>
