<template>
	<div>
		<v-container grid-list-lg>
			<v-layout column wrap>
				<v-flex>
					<h1 primary-title>{{thing.name}}</h1>
					<v-img height="400" :src="thing.photo.images.large.url">
						<template v-slot:placeholder>
							<v-layout fill-height align-center justify-center ma-0>
								<v-progress-circular indeterminate color="primary"></v-progress-circular>
							</v-layout>
						</template>
					</v-img>
					<h2 primary-title>{{thing.location_string}}</h2>
					<p>{{thing.description}}</p>

					<h2>
						Reviews
						<v-icon>mdi-account-star</v-icon>
						<v-divider></v-divider>
					</h2>
				</v-flex>

				<v-container grid-list-lg fluid>
					<v-layout row wrap fill>
						<v-flex xs12 lg12 v-for="(review, index) in thing.reviews" :key="index">
							<CardReview :props="review"></CardReview>
						</v-flex>
					</v-layout>
				</v-container>
				<v-flex xs12>
					<a target="_blank" :href="thing.web_url">From Tripadvisor</a>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container grid-list-lg>
			<h2>
				{{thing.name}} on Instagram
				<v-icon>mdi-instagram</v-icon>
				<v-divider></v-divider>
				<br />
			</h2>
			<v-layout row wrap>
				<v-flex xs6 md4 v-for="(post, index) in thing.instagram" :key="index" v-if="index<6">
					<CardInstagram :props="post"></CardInstagram>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container>
			<h2>
				{{thing.name}} Location
				<v-icon>mdi-map-marker</v-icon>
				<v-divider></v-divider>
				<br />
			</h2>
			<googleMapCoordinate :props="{Lat: thing.latitude, Lng: thing.longitude}"></googleMapCoordinate>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "tripadvisor_thingstodo_borsh";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { slug: route.params.id } }
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
			thing: request1.data.entries[0]
		};
	},

	components: {
		CardReview: () => import("@/components/CardReview"),
		CardInstagram: () => import("@/components/CardInstagram"),
		googleMapCoordinate: () => import("@/components/googleMapCoordinate")
	},

	head() {
		return {
			title: this.thing.name,
			meta: [
				{
					hid: this.thing.name,
					name: this.thing.name,
					content: this.thing.description
				}
			]
		};
	}
};
</script>
<style>
</style>