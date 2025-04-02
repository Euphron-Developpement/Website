import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxt/test-utils/module'],
  css: ['~/assets/css/main.css', '~/assets/css/variables.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      serverApiUrl:
        (process.env.NUXT_SERVER_API_URL as string) ?? 'http://api_dev:3000',
      publicApiUrl:
        (process.env.NUXT_PUBLIC_API_URL as string) ?? 'http://localhost:3000',
    },
  },
});
