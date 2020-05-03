<template>
	<div>
		<v-container grid-list-xs>
			<v-layout column fill-height align-center justify-center>
				<v-flex xs12>
					<h1
						class="text-xs-center text-lg-center text-md-center text-sm-center"
					>What to do in {{$store.state.city}}</h1>
				</v-flex>
				<v-flex xs12>
					<v-icon x-large>mdi-info</v-icon>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<!-- p{{posts}} -->
			<v-layout row wrap>
				<v-flex xs12 sm4 md4 lg6 v-for="(thing, index) in things" :key="index">
					<v-hover>
						<v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
							<nuxt-link style="text-decoration:none; color: primary;" :to="'/activities/'+thing.slug">
								<v-card-title primary-title>{{thing.name}}</v-card-title>
								<v-card-subtitle primary-title>{{thing.location_string}}</v-card-subtitle>
								<v-img height="200" :src="thing.photo.images.large.url">
									<template v-slot:placeholder>
										<v-layout fill-height align-center justify-center ma-0>
											<v-progress-circular indeterminate color="primary"></v-progress-circular>
										</v-layout>
									</template>
								</v-img>
								<v-card-text>{{thing.description.substr(0,200)}}...</v-card-text>
							</nuxt-link>
						</v-card>
					</v-hover>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "tripadvisor_thingstodo_" + store.state.city.toLowerCase();

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
			things: request1.data.entries
		};
	},

	components: { CardInstagram: () => import("@/components/CardInstagram") }
};
</script>
<style>
</style>