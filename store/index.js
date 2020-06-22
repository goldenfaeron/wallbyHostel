import axios from "axios"

export const state = () => ({

    name: "Wallaby Hostel",
    city: "Borsh",
    country: "Albania",
    developer: { name: "Sam", location: "Borsh, Albania" },
    // weather: { "coord": { "lon": 20.95, "lat": 40.59 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "base": "stations", "main": { "temp": 284.2, "feels_like": 282.25, "temp_min": 284.2, "temp_max": 284.2, "pressure": 1014, "humidity": 57, "sea_level": 1014, "grnd_level": 911 }, "wind": { "speed": 0.6, "deg": 292 }, "rain": { "1h": 0.14 }, "clouds": { "all": 38 }, "dt": 1588014751, "sys": { "country": "AL", "sunrise": 1587958790, "sunset": 1588008449 }, "timezone": 7200, "id": 782756, "name": "Borsh", "cod": 200 },

    //CURRENCIES  
    defaultCurrency: 'GBP',
    currency: 'GBP',
    exchangeRate: '1',

    //JSON
    bookingCount: [],

    //Openweathermap
    weatherToken: 'cdb5d1ad4220610c588be2ecfe1a4671',

    //i18n

    locale: "en",
    locales: ["en", "sq"],



    //USER
    user: { user: "", email: "", group: "", id: "", api_key: "", loggedIn: false },


    //Cockpit
    collectionsToken: '641a6e0c88f94f7d2adadd184752e1',
    collectionSchema: '31fdc0efbd3c289620e787921e3e8b',
    assetRoot: "https://cockpit.goborshi.hackmylanguage.com/storage/uploads",
    webRoot: "https://cockpit.goborshi.hackmylanguage.com",
    webRoot2: "http://cms.alanfurneaux.co.uk",
    imageToken: '969461cb194b4b0cd0c695d09e9502',
    authToken: 'ac203b0773cc501428903c9de9ad09',

    //Page content preload / req = request
    pageData: []



})


export const mutations = {

    // setCurrency: (state, payload) => (state.currency = payload),
    // setExchangeRate: (state, payload) => (state.exchangeRate = payload),

    setLanguage(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
    setPageData(state, data) {

        state.pageData = data;


    },

    setBookingCount(state, count) {
        state.bookingCount = count;
    },

    setLoginStatus(state, user) {
        state.user.loggedIn = user.value
        state.user.user = user.user
        state.user.id = user.id

    }


}

export const actions = {



    // async FETCH_EXCHANGE_RATE({ commit, state }, payload) {

    //     const { data } = await axios.get("https://api.exchangeratesapi.io/latest?base=" + state.defaultCurrency + "&symbols=" + payload)
    //     commit('setExchangeRate', Math.round(data.rates[payload] * 100) / 100)
    //     commit('setCurrency', payload)

    // },

    //JSON
    async nuxtServerInit({ commit, state }) {



        let collection = "booking_borsh";

        let request = await axios.get(
            state.webRoot +
            "/api/collections/collection/" +
            collection +
            "?token=" +
            state.collectionSchema
        );




        await commit('setBookingCount', request.data.itemsCount);


    },

}

export const getters = {
    // getExchangeRate: state => state.exchangeRate,
    getNavigation: (state, ) =>
        [
            {
                icon: "mdi-home",
                title: "About " + state.city,
                to: "/"
            },
            {
                icon: "mdi-city",
                title: "Towns near " + state.city,
                to: "/towns"
            },
            {
                icon: "mdi-map-legend",
                title: "What to do",
                to: "/activities"
            },

            {
                icon: "mdi-home",
                title: "Where to stay",
                to: "/booking"
            },
            {
                icon: "mdi-food",
                title: "Where to eat / drink",
                to: "/bars"
            },
            {
                icon: "mdi-store",
                title: "Where to shop",
                to: "/shops"
            },
            {
                icon: "mdi-instagram",
                title: "What to see",
                to: "/instagram/posts"
            },
            {
                icon: "mdi-youtube",
                title: "What to watch",
                to: "/youtube"
            },

            {
                icon: "",
                img: "/img/airbnbLogo.png",
                title: "Airbnb",
                to: "/airbnb"
            },
            {
                icon: "mdi-airport",

                title: "Airports near " + state.city,
                to: "/airports"
            },
            {
                icon: "mdi-weather-cloudy",

                title: "Weather in " + state.city,
                to: "/weather"
            },

            {
                icon: "mdi-biohazard",
                title: "Covid-19 in " + state.city,
                to: "/corona"
            },
            {
                icon: "mdi-account-box",
                title: state.name + " Team",
                to: "/team"
            },
            {
                icon: "mdi-account-box",
                title: state.name + " News",
                to: "/news"
            },
        ],

    getLoggedInStatus: state => state.user.loggedIn



}


