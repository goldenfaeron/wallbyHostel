export default async function ({ store, $axios, route }) {
    let singleton = "home";
    if (route.params.id) {

        try {

            let request1 = await $axios.post(
                store.state.webRoot2 +
                "/api/singletons/get/" +
                singleton +
                "?token=" +
                process.env.pagesToken +
                "&rspc=1",
                { filter: { slug: route.params.id } }
            );

            let request2 = await $axios.post(
                store.state.webRoot2 +
                "/api/singletons/get/" +
                singleton +
                "?token=" +
                process.env.pagesToken +
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
                    store.state.webRoot2 +
                    "/api/singletons/get/" +
                    singleton +
                    "?token=" +
                    process.env.pagesToken,
                )
                .then(res => {
                    return store.commit("setPageData", res.entries)
                });
        }

        catch (e) {
            // console.log(e.response)
        }

}
