export default function ({ store, $axios }) {
    return $axios.$get('https://cockpit.goborshi.hackmylanguage.com/api/collections/get/airbnb?token=641a6e0c88f94f7d2adadd184752e1'
    ).then((res) => {
        console.log(store.state.city)
        // console.log(res)
        store.commit("setPageData", res.entries[1])
    });
}