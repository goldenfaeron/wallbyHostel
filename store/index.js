import axios from "axios"
export const state = () => ({

    name: "goBorshi",
    city: "Borsh",
    country: "Albania",
    developer: { name: "Sam", location: "Borsh, Albania" },
    // weather: { "coord": { "lon": 20.95, "lat": 40.59 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "base": "stations", "main": { "temp": 284.2, "feels_like": 282.25, "temp_min": 284.2, "temp_max": 284.2, "pressure": 1014, "humidity": 57, "sea_level": 1014, "grnd_level": 911 }, "wind": { "speed": 0.6, "deg": 292 }, "rain": { "1h": 0.14 }, "clouds": { "all": 38 }, "dt": 1588014751, "sys": { "country": "AL", "sunrise": 1587958790, "sunset": 1588008449 }, "timezone": 7200, "id": 782756, "name": "Borsh", "cod": 200 },

    //CURRENCIES  
    defaultCurrency: 'GBP',
    currency: 'GBP',
    exchangeRate: '1',

    //JSON
    borshHotels: [],
    amazonProducts: [],
    // borshBars: [],
    borshInstagram: [],

    // borshYoutube: [],

    //NAV



    //Cockpit
    collectionsToken: '641a6e0c88f94f7d2adadd184752e1',
    assetRoot: "https://cockpit.goborshi.hackmylanguage.com/storage/uploads",
    webRoot: "https://cockpit.goborshi.hackmylanguage.com",
    imageToken: '969461cb194b4b0cd0c695d09e9502',





})


export const mutations = {

    // setCurrency: (state, payload) => (state.currency = payload),
    // setExchangeRate: (state, payload) => (state.exchangeRate = payload),

    //json

    setBorshHotels(state, list) {
        state.borshHotels = list;
    },
    // setBorshBars(state, list) {
    //     state.borshBars = list;
    // },
    setBorshInstagram(state, list) {
        state.borshInstagram = list;
    },

    // setBorshYoutube(state, list) {
    //     state.borshYoutube = list;
    // },






}

export const actions = {



    // async FETCH_EXCHANGE_RATE({ commit, state }, payload) {

    //     const { data } = await axios.get("https://api.exchangeratesapi.io/latest?base=" + state.defaultCurrency + "&symbols=" + payload)
    //     commit('setExchangeRate', Math.round(data.rates[payload] * 100) / 100)
    //     commit('setCurrency', payload)

    // },

    //JSON
    async nuxtServerInit({ commit }) {
        //AirBNB
        // let files = await require.context('~/assets/json/amazon', false, /\.json$/);
        // let amazonProducts = files.keys().map(key => {
        //     let res = files(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setAmazonProducts', amazonProducts);

        // Booking.com
        let files2 = await require.context('~/assets/json/bookingborsh', false, /\.json$/);
        let borshHotels = files2.keys().map(key => {
            let res = files2(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setBorshHotels', borshHotels);

        //google locations (bars)
        // let files3 = await require.context('~/assets/json/barsborsh', false, /\.json$/);
        // let borshbars = files3.keys().map(key => {
        //     let res = files3(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setBorshBars', borshbars);

        //instagram
        let files4 = await require.context('~/assets/json/instagram', false, /\.json$/);
        let borshinstagram = files4.keys().map(key => {
            let res = files4(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setBorshInstagram', borshinstagram);

        //Airbnb

        //Youtube
        //     let files6 = await require.context('~/assets/json/youtube', false, /\.json$/);
        //     let borshYoutube = files6.keys().map(key => {
        //         let res = files6(key);
        //         res.slug = key.slice(2, -5);
        //         return res;
        //     });
        //     await commit('setBorshYoutube', borshYoutube);
    },

}

export const getters = {
    // getExchangeRate: state => state.exchangeRate,
    getNavigation: state =>
        [
            {
                icon: "mdi-home",
                title: "Home",
                to: "/"
            },

            {
                icon: "mdi-key-variant",
                title: state.city + " Hotels",
                to: "/booking"
            },
            {
                icon: "mdi-beer",
                title: state.city + " Bars",
                to: "/bars"
            },
            {
                icon: "mdi-instagram",
                title: state.city + " on Instagram",
                to: "/instagram"
            },

            {
                icon: "",
                img: "/img/airbnbLogo.png",
                title: state.city + " Airbnb",
                to: "/airbnb"
            },
            {
                icon: "mdi-youtube",
                title: state.city + " on Youtube",
                to: "/youtube"
            },
            {
                icon: "mdi-biohazard",
                title: "Covid-19 in " + state.city,
                to: "/corona"
            },
            {
                icon: "mdi-account-box",
                title: state.name + " Team",
                to: "/team/"
            },
            {
                icon: "mdi-account-box",
                title: state.name + " News",
                to: "/news/"
            },
        ],

}


