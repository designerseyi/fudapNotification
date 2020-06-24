const redirectSSL = require('redirect-ssl')
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2F495E' },
  /*
   ** Global CSS{ src: '~/assets/main.scss', lang: 'scss' },
   
   */
  css: [  { src: '~/assets/main.scss', lang: 'scss' },{src:'~/assets/spacing.css'}],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins:{src:'~/plugins/vuetify-google-autocomplete', ssr: false}, ['~/plugins/vuetify-google-autocomplete',{ src: '~/plugins/localStorage.js', ssr: false }],
  plugins: [
          ],
  // plugins: [{ src: '~/plugins/localStorage.js', ssr: false },{ src: '~/plugins/localStorage.js', ssr: false }, {
      //src: '~/plugins/vue-chart.js', mode: 'client'}],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module'@nuxtjs/vuetify',
    // '@nuxtjs/stylelint-module'
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    // '@nuxtjs/google-analytics', {
    //   id: 'UA-105068233-2'
    // }
    
  ],

 
  // serverMiddleware: [
    
  //   redirectSSL.create({
  //     enabled: process.env.NODE_ENV === 'production'
  //    }),
  // ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',   

    // ['nuxt-buefy', { defaultIconPack: 'fas', }],
    // Doc: https://axios.nuxtjs.org/usage  ['nuxt-sass-resources-loader','.assets/main.scss'],
    '@nuxtjs/style-resources',
   
    // '@nuxtjs/icon',
    // '@nuxtjs/meta',
    // '@nuxtjs/manifest',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
  
    'nuxt-buefy',
    // ['nuxt-vuex-localstorage', {
    //   // mode: 'debug',
    //   localStorage: ['usersStore']
    // }]
  
    
  ],

  
  proxy:{
    // '/api':{
    //   target:'http://localhost:4000/api',
    //   // target:'https://fudapserver.herokuapp.com/api',
    //   pathRewrite:{
    //     '^/api':'/'
    //   },
    //   changeOrigin:true
    // }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy:true,
    // headers: {
    //   'Content-Type': 'application/json;charset=UTF-8',
    //   "Access-Control-Allow-Origin": "*",
    // }
    // baseURL:'http://localhost:4000/api',
  },
  /*
   ** Build configuration
   */

  pwa:{
      manifest:{
        name:'Fudap Vendor NG',
        short_name:'Fudap Vendor',
        description:'Food and Groceries Delivery Platform',
        theme_color: '#2F495E',
        start_url: '/'
      }
  },
   
  oneSignal: {
    init: {
      // appId: 'd10de6af-fa17-4ec9-96af-91d829b8026e',
      // production
      appId: '4e270d8b-69cf-410d-9ce6-84656ddbd12b',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      },
      notifyButton: {
        enable: true,
      },
    },
    cdn: true,

    // Use any custom URL
    OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
  },

 

  server: {
    port: 3000, // default: 3000
  
  },

  // router: {
  //   middleware: ['storemenuauth']
  // },

  build: {
    
    extend(config,{isDev,isClient}){
      
     
    
    // if (isDev) { config.mode = 'development' }
    },
    postcss: {
      
      preset: {
        features: {
          customProperties: false
        }
      }
    },
   
    // transpile: ['vuetify-google-autocomplete']
    // transpile: ['vuetify-google-autocomplete',/(.+)(nuxt-vuex-localstorage\/)(.+)(\.js)$/],
    
    
   }
}
