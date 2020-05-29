export default async function ({ store, $axios, route }) {
    let collection = "airbnb";
    if (route.params.id) {

        try {

            let request1 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                process.env.collectionToken +
                "&rspc=1",
                { filter: { slug: route.params.id } }
            );

            let request2 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                process.env.collectionToken +
                "&rspc=1",
                { limit: 20 }
            );

            return store.commit("setPageData", [request1.data.entries[0], request2.data.entries])
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
                    process.env.collectionToken +
                    "&rspc=1",
                    {
                        fields: { name: 1, photos: 1, roomType: 1, stars: 1, slug: 1 }
                    }
                )
                .then(res => {
                    return store.commit("setPageData", res.entries)
                });
        }

        catch (e) {
            // console.log(e.response)
        }

}
