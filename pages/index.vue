<template>
	<div>
		<welcome></welcome>
		<about></about>
		<features></features>
		<stats></stats>
		<blog></blog>
		<instagram></instagram>
		<v-layout justify-center>
			<v-btn color="primary" href="/instagram">See More</v-btn>
		</v-layout>
		<br />
		<booking></booking>
		<br />
		<airbnb :props="airbnb"></airbnb>
		<br />
		<bars></bars>
	</div>
</template>


<script>
import welcome from "~/components/fromTemplate/welcome.vue";
import about from "~/components/fromTemplate/about.vue";
import features from "~/components/fromTemplate/features.vue";
import stats from "~/components/fromTemplate/stats.vue";
import blog from "~/components/fromTemplate/blog.vue";
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
		blog,
		booking,
		instagram,
		airbnb,
		bars
	},

	async asyncData({ $axios, route, store }) {
		let collection = "airbnb";

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
			airbnb: request1.data.entries
		};
	}
};
</script>
