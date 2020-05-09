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

      //team, featured_hotels, corona,hotels, google_places, tripadvisor_restuarants_borsh, activities, shops, aiports, featured_business

      let team = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/team?token=641a6e0c88f94f7d2adadd184752e1",
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
      let featured_hotels = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/hotels?token=641a6e0c88f94f7d2adadd184752e1",
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
      let corona = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/corona?token=641a6e0c88f94f7d2adadd184752e1",
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

      let hotels = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/booking_borsh?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/booking/' + entry.slug
            }

          })
        });
      let google_places = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/googleplaces_borsh?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/bars/google/' + entry.slug
            }

          })
        });
      let tripadvisor_restuarants_borsh = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/tripadvisor_restuarants_borsh?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/bars/tripadvisor/' + entry.slug
            }

          })
        });
      let activities = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/tripadvisor_thingstodo_borsh?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/activities/' + entry.slug
            }

          })
        });
      let shops = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/googleplaces_shops_borsh?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/shops/' + entry.slug
            }

          })
        });
      // let airports = axios.get("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/googleplaces_airports_borsh?token=641a6e0c88f94f7d2adadd184752e1",
      //   {

      //     fields: { slug: 1, _id: 0 }
      //   })
      //   .then((res) => {
      //     return res.data.entries.map((entry) => {
      //       return {
      //         route: '/airports/' + entry.slug
      //       }

      //     })
      //   });

      let featured_business = await axios.post("https://cockpit.goborshi.hackmylanguage.com/api/collections/get/shops_featured?token=641a6e0c88f94f7d2adadd184752e1",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/featured_business/' + entry.slug
            }

          })
        });




      //team, featured_hotels, corona,hotels, google_places, tripadvisor_restuarants_borsh, activities, shops, aiports, featured_business
      // airports 9

      return Promise.all([team, featured_hotels, corona, hotels, google_places, tripadvisor_restuarants_borsh, activities, shops, featured_business,]).then(values => {
        return [...values[0], ...values[1], ...values[2], ...values[3], ...values[4], ...values[5], ...values[6], ...values[7], ...values[8], ...values[9]]
      })
    },

  },





  build: {

    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     // terser-webpack-plugin
    //     // optimize-css-assets-webpack-plugin
    //   ],


    // },

    // splitChunks: {
    //   layouts: false,
    //   pages: true,
    //   commons: true
    // },

    // extractCSS: true,
    // transpile: ['vuetify/lib'],
    // plugins: [new VuetifyLoaderPlugin()],
    extend(config, ctx) {
    }
  },
  /*
  ** You can extend webpack config here
  */

}
