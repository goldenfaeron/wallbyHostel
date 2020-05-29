export default async function ({ store, $axios, route }) {

    let collection = "tripadvisor_thingstodo_borsh";
    let collection2 = "shops_featured";
    if (route.params.id) {

        try {


            let request1 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                store.state.collectionsToken,
                { filter: { slug: route.params.id }, populate: 1 }
            );

            let request2 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection2 +
                "?token=" +
                store.state.collectionsToken,
                { limit: 5, sort: { _created: -1 } }
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
                    store.state.collectionsToken +
                    "&rspc=1",
                    {
                        fields: {
                            name: 1,
                            description: 1,
                            location_string: 1,
                            photo: 1,
                            slug: 1,
                            cp_photo: 1
                        },
                        limit: 15
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
