<template>
	<div>
		<v-container grid-list-xs>
			<v-layout column fill-height align-center justify-center>
				<v-flex xs12>
					<v-icon x-large>mdi-instagram</v-icon>
				</v-flex>
				<v-flex xs12>
					<h1
						class="text-xs-center text-lg-center text-md-center text-sm-center"
					>Latest Instagram posts in {{$store.state.city}}</h1>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<!-- p{{posts}} -->
			<v-layout row wrap>
				<v-flex xs6 sm4 md3 lg2 v-for="(post, index) in posts" :key="index">
					<CardInstagram :props="post"></CardInstagram>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "instagram";

		let request1 = await $axios.get(
			"https://api.apify.com/v2/datasets/Ihrf9Y7dkGjwNwmi5/items?format=json&clean=1&limit=60"
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
			posts: request1.data
		};
	},

	components: { CardInstagram: () => import("@/components/CardInstagram") },

	head() {
		return {
			title: "Instagram #" + this.$store.state.city,
			meta: [
				{
					hid: "Instagram #" + this.$store.state.city,
					name: "Instagram #" + this.$store.state.city,
					content: "Instagram #" + this.$store.state.city
				}
			]
		};
	}
};
</script>
<style>
</style>