<template>
	<div>
		<welcome></welcome>
		<about></about>
		<stats></stats>
		<activities :props="activities"></activities>
		<bars :props="bars"></bars>

		<v-divider></v-divider>

		<booking :props="hotels"></booking>

		<v-divider></v-divider>
		<br />

		<airbnb :props="airbnb"></airbnb>

		<v-divider></v-divider>

		<instagram :props="instagram"></instagram>
	</div>
</template>


<script>
import welcome from "~/components/fromTemplate/welcome.vue";
import about from "~/components/fromTemplate/about.vue";
import features from "~/components/fromTemplate/features.vue";
import stats from "~/components/fromTemplate/stats.vue";

import booking from "~/components/Booking.vue";
import instagram from "~/components/Instagram.vue";
import airbnb from "~/components/airbnb.vue";
import bars from "~/components/bars.vue";
import activities from "~/components/activities.vue";

export default {
	components: {
		welcome,
		about,
		features,
		stats,

		booking,
		instagram,
		airbnb,
		bars,
		activities
	},

	async asyncData({ $axios, route, store }) {
		let collection = "airbnb";
		let collection2 = "instagram";
		let collection3 = "hotels";
		let collection4 = "googleplaces_borsh";
		let collection5 = "tripadvisor_thingstodo_borsh";

		// aribnb
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{
				fields: { name: 1, photos: 1, roomType: 1, stars: 1, slug: 1 },
				limit: 4
			}
		);

		// instagram
		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{
				limit: 8
			}
		);

		//hotels (featured)
		let request3 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection3 +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{
				fields: {
					name: 1,
					rating: 1,
					header_image: 1,
					excellent_customer_service: 1,
					corona_safe: 1,
					quarantine_friendly: 1,
					rating: 1,
					slug: 1
				},

				limit: 4
			}
		);

		//googleplaces_borsh (bars)
		let request4 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection4 +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{
				sort: { imageUrls: -1 },
				fields: {
					title: 1,
					address: 1,
					categoryName: 1,
					reviewsCount: 1,
					imageUrls: 1,
					slug: 1
				},
				limit: 4
			}
		);

		//Activities
		let request5 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection5 +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{ limit: 4 }
		);

		return {
			airbnb: request1.data.entries,
			instagram: request2.data.entries,
			hotels: request3.data.entries,
			bars: request4.data.entries,
			activities: request5.data.entries
		};
	}

	// mounted() {
	// 	// this.$nextTick(() => {
	// 	this.$nuxt.$loading.start();
	// 	// });
	// },
};
</script>
