export default async function ({ store, $axios, route }) {
    let singleton = "details";
    if (route.params.id) {

        try {

            let request1 = await $axios.post(
                store.state.webRoot2 +
                "/api/singletons/get/" +
                singleton +
                "?token=" +
                process.env.pagesToken,
                { filter: { slug: route.params.id } }
            );

            let request2 = await $axios.post(
                store.state.webRoot2 +
                    "/api/singletons/get/" +
                    singleton +
                    "?token=" +
                    process.env.pagesToken,
                { limit: 20 }
            );

            return store.commit("setFooterData", [request1, request2])
        }


        catch (e) {
            // console.log(e.response)
        }
    }

    else
        //load all

        try {
            let request3 = await $axios.post(
                store.state.webRoot2 +
                "/api/singletons/get/" +
                singleton +
                "?token=" +
                process.env.pagesToken,
             );
               
                    return store.commit("setFooterData", request3.data)
              
        }

        catch (e) {
            // console.log(e.response)
        }

}
