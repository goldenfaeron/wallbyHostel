export default async function ({ store, $axios, route }) {
    let collection = "googleplaces_airports_borsh";
    if (route.params.id) {

        try {

            return await $axios
                .$post(
                    store.state.webRoot +
                    "/api/collections/get/" +
                    collection +
                    "?token=" +
                    store.state.collectionsToken,
                    { filter: { slug: route.params.id } }
                )
                .then(res => {
                    return store.commit("setPageData", [res.entries[0], JSON.parse(JSON.stringify(res.entries[0].reviews))])
                });


        }


        catch (e) {
            // console.log(e.response)
        }
    }

    else
        //load all

        try {
            return await $axios
                .$post(
                    store.state.webRoot +
                    "/api/collections/get/" +
                    collection +
                    "?token=" +
                    store.state.collectionsToken +
                    "&rspc=1",
                    { fields: { reviews: 0, popularTimesHistogram: 0 }, limit: 15 }
                )
                .then(res => {
                    return store.commit("setPageData", res.entries)
                });
        }

        catch (e) {
            // console.log(e.response)
        }

}
