<template>
	<div>
		<v-container grid-list-xs>
			<v-layout column fill-height align-center justify-center>
				<v-flex xs12>
					<h1
						class="text-xs-center text-lg-center text-md-center text-sm-center"
					>Latest Instagram posts in {{$store.state.city}}</h1>
				</v-flex>
				<v-flex xs12>
					<v-icon x-large>mdi-instagram</v-icon>
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

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 15 }
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
			posts: request1.data.entries
		};
	},
	CardInstagram: () => import("@/components/CardInstagram"),
	components: { CardInstagram: () => import("@/components/CardInstagram") }
};
</script>
<style>
</style>