const path = require('path');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    'cookie-universal-nuxt',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    
  ],
  build: {
    extend (config) {
      config.resolve.alias['~utils'] = path.resolve(__dirname, 'utils')
    }
  }
}

