// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    },
  },
  app: {
    head: {
      title: 'nuxt3-demo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ],
    },
  },
  css: [
    '~/assets/style/global.css'
  ]
})