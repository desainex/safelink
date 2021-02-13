export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'safelink',
    titleTemplate: 'Earn with links - %s',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Safelink Web Apps' },
      { name: 'theme-color', content: '#7952b3' },
      { name: 'google-site-verification', content: '' },
      { name: 'msvalidate.01', content: '' },
      { name: 'yandex-verification', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js', async: true, defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  router: {
    linkActiveClass: '',
    linkExactActiveClass: 'active'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   // {src: '@/plugins/blocker/blocker.client.js',  mode: 'client'} // penambahan adblock source https://mughu.me/cara-block-adblock-plus-dan-brave-browser-dengan-javascript/
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics' //https://google-analytics.nuxtjs.org/setup
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxt/http',    // tambahan coba https://http.nuxtjs.org/setup
    '@nuxtjs/pwa',   // https://go.nuxtjs.dev/pwa
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  http: {
    // proxyHeaders: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  googleAnalytics: {
    id: 'UA-XXX-X'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }


}
