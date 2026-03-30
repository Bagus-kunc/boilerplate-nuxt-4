<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 sm:py-32 overflow-hidden">
      <!-- Background Gradient Decoration -->
      <div class="absolute inset-0 pointer-events-none -z-10">
        <div class="absolute inset-y-0 left-1/2 -ml-96 w-[150vw] h-[150%] -translate-x-1/2 transform-gpu bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 blur-3xl animate-pulse" />
      </div>

      <div class="container mx-auto px-4 text-center">
        <UBadge
          variant="subtle"
          label="v4.0.0-latest"
          class="mb-6 rounded-full px-4 py-1.5"
        />
        <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
          The Ultimate <span class="text-primary-500">Nuxt Boilerplate</span>
        </h1>
        <p class="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          Start your next project with the most powerful combination of Nuxt, Nuxt UI, and Pinia. 
          Everything you need to build stunning, high-performance web applications.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            icon="i-heroicons-rocket-launch"
            class="px-8 py-4 rounded-xl shadow-xl hover:shadow-primary-500/20 active:scale-95 transition-all"
            @click="store.increment"
          >
            Get Started ({{ store.count }})
          </UButton>
          <UButton
            size="xl"
            variant="ghost"
            label="Learn More"
            class="px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-800"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 px-4">
          <h2 class="text-4xl font-bold mb-4 tracking-tight">Everything You Need</h2>
          <p class="text-gray-500 text-lg">A curated selection of modern technologies and best practices.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard v-for="(feature, index) in features" :key="index" class="p-4 hover:border-primary-500/50 transition-colors shadow-none bg-white dark:bg-gray-800 border dark:border-gray-700">
            <template #header>
              <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <UIcon :name="feature.icon" class="w-6 h-6 text-primary-500" />
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            </template>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Pinia Demo Section -->
    <section class="py-24">
      <div class="container mx-auto px-4 flex flex-col items-center">
        <UCard class="max-w-md w-full text-center border dark:border-gray-800">
          <template #header>
            <h3 class="text-2xl font-bold">Pinia State Demo</h3>
          </template>
          <div class="p-6">
            <div class="text-6xl font-black text-primary-500 mb-6 font-mono">{{ store.count }}</div>
            <div class="flex items-center justify-center gap-4">
              <UButton icon="i-heroicons-minus" color="gray" variant="ghost" @click="store.decrement" />
              <UButton icon="i-heroicons-arrow-path" color="gray" variant="ghost" @click="store.reset" />
              <UButton icon="i-heroicons-plus" color="gray" variant="ghost" @click="store.increment" />
            </div>
            <p class="mt-4 text-xs text-gray-500 italic">State is persistent across navigation and shares the same store instance.</p>
          </div>
        </UCard>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()

const features = [
  {
    title: 'Nuxt 4 / 3 Latest',
    description: 'Built on the latest version of Nuxt for lightning-fast performance and developer experience.',
    icon: 'i-heroicons-bolt'
  },
  {
    title: 'Nuxt UI & Tailwind',
    description: 'Modern UI components powered by Tailwind CSS. Beautiful, accessible, and fully customizable.',
    icon: 'i-heroicons-swatch'
  },
  {
    title: 'Pinia & TypeScript',
    description: 'Type-safe state management with Pinia. Clean, intuitive, and perfectly integrated with Nuxt.',
    icon: 'i-heroicons-square-3-stack-3d'
  }
]

useSeoMeta({
  title: 'Nuxt Boilerplate - Premium Starter Template',
  description: 'The ultimate Nuxt 4 template with Nuxt UI and Pinia.',
  ogTitle: 'Nuxt Boilerplate',
  ogDescription: 'Start your project with the best stack.',
  ogImage: 'https://nuxt.com/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>
