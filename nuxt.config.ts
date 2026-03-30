// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  typescript: {
    strict: true
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    viewTransition: true
  },
  devtools: { enabled: true }
})
