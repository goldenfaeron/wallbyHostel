<template>
	<div>
		<v-parallax :src="$store.state.assetRoot + hotel.header_image.path"></v-parallax>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<h1>{{hotel.name}}</h1>
					<!-- <h3>{{hotel.type}}</h3> -->
					<p v-html="hotel.description"></p>
					<v-divider></v-divider>
					<!-- Reviews {{hotel.reviews}} -->
					<v-divider></v-divider>
					<!-- Breakfast: {{hotel.breakfast}} -->
					<v-divider></v-divider>
					<!-- Check in from: {{hotel.checkInFrom}} until {{hotel.checkInTo}} -->
					<v-divider></v-divider>
					<!-- Address: {{hotel.address.full}} -->
				</v-flex>

				<v-flex xs12>
					<v-carousel height="600">
						<v-carousel-item
							:src="$store.state.webRoot + item.path"
							v-for="(item, index) in hotel.gallery"
							:key="index"
						></v-carousel-item>
					</v-carousel>
				</v-flex>
				<!-- {{hotel.rooms[0]}} -->
				{{hotel.rooms_details.value}}
				<v-flex xs12>
					<h2>Rooms</h2>
					<v-container grid-list-lg>
						<v-layout row wrap>
							<v-flex xs12 sm6 md3 v-for="(item, index) in hotel.rooms_details" :key="index">
								<v-card>
									<v-card-title primary-title>{{item.value.name}}</v-card-title>
									<v-card-title primary-title>EURO {{item.value.price}}</v-card-title>
									<v-card-text>
										<!-- {{item.bedType}} -->
										<br />
										<!-- Persons {{item.persons}} -->
									</v-card-text>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "hotels";

		//Get collection
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { slug: route.params.id } }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 5, sort: { _created: -1 } }
		);
		return {
			hotel: request1.data.entries[0],
			featuredHotels: request2.data.entries
		};
	},
	data() {
		return {};
	}
};
</script>