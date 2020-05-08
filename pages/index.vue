<template>
	<div>
		<welcome></welcome>
		<about></about>
		<stats></stats>
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

export default {
	components: {
		welcome,
		about,
		features,
		stats,

		booking,
		instagram,
		airbnb,
		bars
	},

	async asyncData({ $axios, route, store }) {
		let collection = "airbnb";
		let collection2 = "instagram";
		let collection3 = "hotels";
		let collection4 = "googleplaces_borsh";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{
				fields: { name: 1, photos: 1, roomType: 1, stars: 1, slug: 1 },
				limit: 4
			}
		);
		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken,
			{
				fields: { imageUrl: 1, likesCount: 1, firstComment: 1, slug: 1 },
				limit: 4
			}
		);
		let request3 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection3 +
				"?token=" +
				store.state.collectionsToken,
			{
				fields: {
					name: 1,
					rating: 1,
					header_image: 1,
					excellent_customer_service: 1,
					rating: 1,
					slug: 1
				},

				limit: 4
			}
		);
		let request4 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection4 +
				"?token=" +
				store.state.collectionsToken,
			{
				filter: { imageUrls: true },
				fields: {
					title: 1,
					address: 1,
					categoryName: 1,
					reviewsCount: 1,
					slug: 1
				},
				limit: 4
			}
		);

		// let request2 = await $axios.post(
		// 	store.state.webRoot +
		// 		"/api/collections/get/" +
		// 		collection +
		// 		"?token=" +
		// 		store.state.collectionsToken,
		// 	{ limit: 5, sort: { _created: -1 } }
		// );
		return {
			// hotel: request1.data.entries[0],
			airbnb: request1.data.entries,
			instagram: request2.data.entries,
			hotels: request3.data.entries,
			bars: request4.data.entries
		};
	}
};
</script>
