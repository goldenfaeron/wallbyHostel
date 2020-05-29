export default async function ({ store, $axios, route }) {
    let collection = "hotels";
    let collection2 = "booking_borsh";
    let collection3 = "booking_region";
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

            //hotels
            let request1 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                store.state.collectionsToken +
                "&rspc=1",
                {
                    fields: {
                        description: 0,
                        gallery: 0,
                        ammenities: 0,
                        rooms: 0,
                        linked_instagram: 0,
                        linked_object: 0,
                        comment: 0,
                        rooms_details: 0
                    },
                    limit: 6
                }
            );

            let request2 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection2 +
                "?token=" +
                store.state.collectionsToken +
                "&rspc=1",
                { fields: { features: 0, rooms: 0 } }
            );

            let request3 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection3 +
                "?token=" +
                store.state.collectionsToken +
                "&rspc=1",
                {
                    fields: { features: 0, rooms: 0 },
                    limit: 4
                }
            );
            return store.commit("setPageData", [request1.data.entries, request2.data.entries.reverse(), request3.data.entries])
        }

        catch (e) {
            // console.log(e.response)
        }

}
