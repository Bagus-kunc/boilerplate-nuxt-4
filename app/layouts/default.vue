<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-paper-airplane" class="w-8 h-8 text-primary-500" />
          <span class="text-xl font-bold tracking-tight">NuxtBoiler</span>
        </div>

        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <ULink to="/" class="hover:text-primary-500 transition-colors">Home</ULink>
          <ULink to="#features" class="hover:text-primary-500 transition-colors">Features</ULink>
          <ULink to="#about" class="hover:text-primary-500 transition-colors">About</ULink>
        </nav>

        <div class="flex items-center gap-4">
          <ClientOnly>
            <UButton
              :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
              color="neutral"
              variant="ghost"
              aria-label="Toggle dark mode"
              @click="toggleTheme"
            />
          </ClientOnly>
          <UButton color="primary" variant="solid" class="hidden sm:flex">
            Get Started
          </UButton>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Nuxt Boilerplate. Built with ❤️ using Nuxt UI.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const toggleTheme = (event: MouseEvent) => {
  // @ts-expect-error - View Transition API is experimental
  const isAppearanceTransition = document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  // View Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`
    ]
    document.documentElement.animate(
      {
        clipPath: clipPath
      },
      {
        duration: 600,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<style>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
