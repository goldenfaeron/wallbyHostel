export default async function ({ store, $axios, route }) {
    let singleton = "home";
    if (route.params.id) {

        try {

            let request1 = await $axios.post(
               "http://cms.alanfurneaux.co.uk/api/singletons/get/home?token=7d7d15f4fa6c768e39016bce4cf96f",
                { filter: { slug: route.params.id } }
            );

            let request2 = await $axios.post(
                "http://cms.alanfurneaux.co.uk/api/singletons/get/home?token=7d7d15f4fa6c768e39016bce4cf96f",
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
            let request3 = await $axios.post(
                "http://cms.alanfurneaux.co.uk/api/singletons/get/home?token=7d7d15f4fa6c768e39016bce4cf96f",
             );
 
             let request4 = await $axios.post(
                 "http://cms.alanfurneaux.co.uk/api/singletons/get/details?token=7d7d15f4fa6c768e39016bce4cf96f",
             );
 
            // return store.commit("setPageData", [request3, request4])
             return store.commit("setPageData", [request3.data, request4.data])
        }

        catch (e) {
            // console.log(e.response)
        }

}
