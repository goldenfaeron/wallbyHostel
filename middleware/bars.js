export default async function ({ store, $axios, route }) {
    let collection = "googleplaces_borsh";
    if (route.params.id) {

        try {


            let request1 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                store.state.collectionsToken +
                "&rspc=1",
                { filter: { slug: route.params.id } }
            );

            let request2 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                store.state.collectionsToken,
                {
                    fields: {
                        imageUrls: 1,
                        title: 1,
                        totalScore: 1,
                        categoryName: 1,
                        url: 1,
                        slug: 1,
                        reviewsCount: 1,
                        location: 1
                    },
                    limit: 20,
                    sort: { imageUrls: -1 }
                }
            );

            return store.commit("setPageData", [request1.data.entries[0], request2.data.entries, JSON.parse(JSON.stringify(request1.data.entries[0].reviews))])
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
                            imageUrls: 1,
                            title: 1,
                            totalScore: 1,
                            categoryName: 1,
                            url: 1,
                            slug: 1,
                            reviewsCount: 1,
                            location: 1
                        },
                        sort: { imageUrls: -1 }
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
