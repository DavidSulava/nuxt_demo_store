// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    baseURL: '/nuxt_demo_store/',
    head: {
      title: 'Nuxt 3 Demo Store',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },
  // generate:{
  //   nojekyll: true, //not working on this version
  // },
  // ssr: false, //When false
  // target: 'static', // and static, nuxt generates a SPA
})
