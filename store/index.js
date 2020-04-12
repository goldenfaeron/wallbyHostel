import axios from "axios"
export const state = () => ({

    name: "goBorshi",

    //CURRENCIES  
    defaultCurrency: 'GBP',
    currency: 'GBP',
    exchangeRate: '1',

    //JSON
    borshHotels: [],
    amazonProducts: [],
    borshBars: [],
    borshInstagram: [],



})


export const mutations = {

    setCurrency: (state, payload) => (state.currency = payload),
    setExchangeRate: (state, payload) => (state.exchangeRate = payload),

    //json

    setBorshHotels(state, list) {
        state.borshHotels = list;
    },
    setBorshBars(state, list) {
        state.borshBars = list;
    },
    setBorshInstagram(state, list) {
        state.borshInstagram = list;
    },




}

export const actions = {



    async FETCH_EXCHANGE_RATE({ commit, state }, payload) {

        const { data } = await axios.get("https://api.exchangeratesapi.io/latest?base=" + state.defaultCurrency + "&symbols=" + payload)
        commit('setExchangeRate', Math.round(data.rates[payload] * 100) / 100)
        commit('setCurrency', payload)

    },

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
        let files3 = await require.context('~/assets/json/barsborsh', false, /\.json$/);
        let borshbars = files3.keys().map(key => {
            let res = files3(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setBorshBars', borshbars);

        //instagram
        let files4 = await require.context('~/assets/json/instagram', false, /\.json$/);
        let borshinstagram = files4.keys().map(key => {
            let res = files4(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setBorshInstagram', borshinstagram);
    },

}

export const getters = {
    getExchangeRate: state => state.exchangeRate,

}


