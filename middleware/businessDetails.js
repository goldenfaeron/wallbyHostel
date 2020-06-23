export default async function ({ store, $axios, route }) {
    let singleton = "Business Details";
    if (route.params.id) {

        try {

            let request1 = await $axios.post(
               "http://cms.alanfurneaux.co.uk/api/singletons/get/Business Details?token=7d7d15f4fa6c768e39016bce4cf96f",
                { filter: { slug: route.params.id } }
            );

            let request2 = await $axios.post(
                "http://cms.alanfurneaux.co.uk/api/singletons/get/Business Details?token=7d7d15f4fa6c768e39016bce4cf96f",
                { limit: 20 }
            );

            return store.commit("setPageData", [request1, request2])
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
                    return store.commit("setPageData", res)
                });
        }

        catch (e) {
            // console.log(e.response)
        }

}
