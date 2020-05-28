<template>
	<div>
		<v-container grid-list-lg>
			<v-layout column>
				<v-flex>
					<v-img height="200" v-if="!thing.cp_photo" :src="thing.photo.images.large.url">
						<template v-slot:placeholder>
							<v-layout fill-height align-center justify-center ma-0>
								<v-progress-circular indeterminate color="primary"></v-progress-circular>
							</v-layout>
						</template>
					</v-img>
					<v-img v-else height="200" :src="$store.state.assetRoot +thing.cp_photo.path">
						<template v-slot:placeholder>
							<v-layout fill-height align-center justify-center ma-0>
								<v-progress-circular indeterminate color="primary"></v-progress-circular>
							</v-layout>
						</template>
					</v-img>
					<Title>
						<div class="display-1 primary--text text-center">{{thing.name}}</div>
						<h2 class="secondary--title text-center">{{thing.location_string}}</h2>
						<p class="text-center">{{thing.description}}</p>
						<!-- Featured business -->
					</Title>
				</v-flex>

				<v-divider></v-divider>
				<v-layout column align-center>
					<v-flex xs12>
						<h2 class="success--text lighten-1">
							Check out
							<!-- <v-icon>mdi-account-star</v-icon> -->
						</h2>
					</v-flex>
					<v-flex xs12>
						<v-container grid-list-lg>
							<v-layout row wrap align-center justify-center>
								<v-flex xs6 md4 v-for="(item, index) in thing.linked_business" :key="index">
									<CardFeaturedBusiness :props="item"></CardFeaturedBusiness>
								</v-flex>
							</v-layout>
						</v-container>
					</v-flex>
				</v-layout>

				<v-divider></v-divider>
				<v-layout align-center v-if="thing.reviews">
					<v-flex xs12>
						<h2 class="warning--text lighten-1 text-center">
							{{thing.reviews.length}} reviews
							<!-- <v-icon>mdi-account-star</v-icon> -->
						</h2>
					</v-flex>
				</v-layout>

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

		<!-- Instagram -->
		<!-- <v-container grid-list-lg>
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
		</v-container>-->

		<v-container>
			<h2>
				{{thing.name}} Location
				<v-icon>mdi-map-marker</v-icon>
				<v-divider></v-divider>
				<br />
			</h2>
			<googleMapCoordinate :props="{Lat: thing.latitude, Lng: thing.longitude}"></googleMapCoordinate>
		</v-container>

		<!-- {{business}} -->
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "tripadvisor_thingstodo_borsh";
		let collection2 = "shops_featured";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { slug: route.params.id }, populate: 1 }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 5, sort: { _created: -1 } }
		);
		return {
			thing: request1.data.entries[0],
			business: request2.data.entries
		};
	},

	components: {
		Title: () => import("@/components/transitions/Title"),
		CardReview: () => import("@/components/cards/CardReview"),
		CardInstagram: () => import("@/components/cards/CardInstagram"),
		CardFeaturedBusiness: () =>
			import("@/components/cards/CardFeaturedBusiness"),
		googleMapCoordinate: () => import("@/components/maps/googleMapCoordinate")
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