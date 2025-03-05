export default {
  ssr: false,

  head: {
    title: 'edu-tech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 3001
  },

  css: [
    '~/assets/css/global.css', 
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/apollo',
  ],

  modules: [
    '@nuxtjs/apollo', 
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql',
        httpLinkOptions: {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMThjMzdjZTItY2QzNC00MzA1LTljYTQtYzE1ZmM3MzZiZWFjIn0.pqWRiyQuvWRVQgIzKvQ85RrBwSF5KxeGZrkFvKt2CG8'
          }
        },
      }
    }
  },
};
