import colors from 'vuetify/es5/util/colors'
import axios from 'axios'




export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/jsonld',

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  },

  server: {
    // port: 8000, // default: 3000
    // host: '0.0.0.0' // default: localhost
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // ------ REFACTOR AS ------

  // axios.all([
  //   axios.get('https://api.github.com/users/mapbox'),
  //   axios.get('https://api.github.com/users/phantomjs')
  // ])
  // .then(axios.spread((user1, user2) => {
  //   console.log('Date created: ', user1.data.created_at);
  //   console.log('Date created: ', user2.data.created_at);
  // }));

  generate: {
    async routes() {

      let team = axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/team?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/team/' + entry.slug
            }

          })
        });
      let hotels = axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/hotels?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/featured_hotels/' + entry.slug
            }

          })
        });
      let corona = axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/corona?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/corona/' + entry.slug
            }

          })
        });


      return Promise.all([team, hotels, corona]).then(values => {
        return [...values[0], ...values[1], ...values[2]]
      })
    },

  },


  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  /*
  ** Build configuration
  */


  build: {

    optimization: {
      minimize: true,
      minimizer: [
        // terser-webpack-plugin
        // optimize-css-assets-webpack-plugin
      ],


    },

    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },

    extractCSS: true,
    transpile: ['vuetify/lib'],
    // plugins: [new VuetifyLoaderPlugin()],
    extend(config, ctx) {
    }
  },
  /*
  ** You can extend webpack config here
  */

}
