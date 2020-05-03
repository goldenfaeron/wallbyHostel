<template>
	<div>
		<v-parallax :src="hotel.image"></v-parallax>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<h1>{{hotel.name}}</h1>
					<h3>{{hotel.type}}</h3>
					<p>{{hotel.description}}</p>
					<v-divider></v-divider>
					Reviews {{hotel.reviews}}
					<v-divider></v-divider>
					Breakfast: {{hotel.breakfast}}
					<v-divider></v-divider>
					Check in from: {{hotel.checkInFrom}} until {{hotel.checkInTo}}
					<v-divider></v-divider>
					br
					Address: {{hotel.address.full}}
					<br />
					<br />Conditions
					<ul>
						<li v-for="(item, index) in hotel.rooms[0].conditions" :key="index">{{item}}</li>
					</ul>
				</v-flex>
				<v-flex xs12 mt-5>
					<h2>Rooms</h2>
					<v-container grid-list-lg fluid>
						<v-layout row wrap>
							<v-flex xs12 sm6 md3 v-for="(item, index) in hotel.rooms" :key="index">
								<CardRoomBooking
									:props="item"
									:name="hotel.name + ' Amenities'"
									buttonText="View Amenities"
								></CardRoomBooking>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
			<googleMapCoordinate :props="{Lat: hotel.location.lat, Lng: hotel.location.lng}"></googleMapCoordinate>
		</v-container>
		<CallToAction
			:props="{booking: hotel.url.replace('httpse', 'https'), website: 'hello', airbnb: 'hello'}"
		></CallToAction>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "booking_" + store.state.city.toLowerCase();

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
		// 		collection2 +
		// 		"?token=" +
		// 		store.state.collectionsToken
		// 	// { limit: 15 }
		// );
		return {
			hotel: request1.data.entries[0]
		};
	},
	components: {
		CardRoomBooking: () => import("@/components/CardRoomBooking"),
		Dialog: () => import("@/components/Dialog"),
		googleMapCoordinate: () => import("@/components/googleMapCoordinate"),
		CallToAction: () => import("@/components/CallToAction")
	},

	data() {
		return {};
	}
};
</script>