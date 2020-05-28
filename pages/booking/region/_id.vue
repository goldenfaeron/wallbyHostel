<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12>
					<v-img :height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']" :src="hotel.image"></v-img>
				</v-flex>
				<Title>
					<v-flex xs12 md6>
						<div class="display-1">
							<v-icon x-large>mdi-home</v-icon>
							{{hotel.name}}
						</div>
						<br />
						<div class>{{hotel.description}}</div>
						<br />
					</v-flex>
				</Title>
				<!-- Information card  -->
				<v-flex xs12 md6 mt-2>
					<v-layout column align-center>
						<v-flex>
							<v-btn :href="hotel.url" target="_blank" color="primary" x-large>Book now</v-btn>
							<p>Go to booking.com</p>
						</v-flex>
					</v-layout>
					<v-card>
						<v-card-text>
							<v-icon>mdi-food-croissant</v-icon>
							Breakfast: {{hotel.breakfast}}
							<br />
							<v-icon>mdi-key-variant</v-icon>
							Check in from: {{hotel.checkInFrom}} until {{hotel.checkInTo}}
							<br />
							<v-icon>mdi-map-marker</v-icon>
							Address: {{hotel.address.full}}
							<br />
							<br />
							<v-divider></v-divider>
							<br />
							<v-icon>mdi-clipboard-list</v-icon>
							<b>Conditions</b>
							<ol>
								<!--  -->
								<li v-for="(item, index) in hotel.rooms[0].conditions" :key="index">{{item}}</li>
							</ol>
							<br />
							<v-divider></v-divider>
							<br />
							<v-icon>mdi-format-quote-open-outline</v-icon>
							<a target="_blank" :href="hotel.url">Read {{hotel.reviews}} reviews on Booking.com</a>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Rooms -->
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12>
					<div class="headline">
						<v-icon large>mdi-door</v-icon>Rooms
					</div>
				</v-flex>
				<v-flex xs6 sm6 md3 v-for="(item, index) in hotel.rooms" :key="index">
					<CardRoomBooking :props="item" :name="hotel.name + ' Amenities'" buttonText="View Amenities"></CardRoomBooking>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Google map -->
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 mt-5>
					<div class="headline">
						<v-icon large>mdi-map-marker-outline</v-icon>Location
					</div>

					<v-flex>
						<v-card>
							<v-card-text>
								<v-icon>mdi-chevron-right</v-icon>
								{{hotel.address.full}}
							</v-card-text>
						</v-card>
					</v-flex>
				</v-flex>
				<v-flex xs12>
					<googleMapCoordinate :props="{Lat: hotel.location.lat, Lng: hotel.location.lng}"></googleMapCoordinate>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- more -->
		<v-container grid-list-lg>
			<!-- Booking -->
			<BookingList :props="more" route="region/" :paginate="schema" collection="booking_region"></BookingList>
		</v-container>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "booking_region";
		let collection2 = "hotels";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ filter: { slug: route.params.id }, limit: 30 }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			"&rspc=1",
			{ fields: { features: 0, rooms: 0 }, limit: 8 }
		);

		let request3 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{
				fields: {
					description: 0,
					gallery: 0,
					ammenities: 0,
					rooms: 0,
					linked_instagram: 0,
					linked_object: 0,
					comment: 0,
					rooms_details: 0
				},
				limit: 8
			}
		);

		//schema
		let request4 = await $axios.get(
			store.state.webRoot +
				"/api/collections/collection/" +
				collection +
				"?token=" +
				store.state.collectionSchema
		);
		return {
			hotel: request1.data.entries[0],
			more: request2.data.entries,
			featured: request3.data.entries,
			schema: request4.data.itemsCount
		};
	},
	components: {
		Title: () => import("@/components/transitions/Title"),
		CardFeaturedHotel: () => import("@/components/cards/CardFeaturedHotel"),
		CardHotelMobile: () => import("@/components/cards/CardHotelMobile"),
		CardHotel: () => import("@/components/cards/CardHotel"),
		CardRoomBooking: () => import("@/components/cards/CardRoomBooking"),
		Dialog: () => import("@/components/Dialog"),
		googleMapCoordinate: () => import("@/components/maps/googleMapCoordinate"),
		BookingList: () => import("@/components/views/BookingList")
	},

	data() {
		return {};
	},

	head() {
		return {
			title: this.hotel.name,
			meta: [
				{
					hid: "Hotel in " + this.$store.state.city,
					name: this.hotel.name,
					content: this.hotel.description
				}
			]
		};
	},
	methods: {
		shuffle(a) {
			var j, x, i;
			for (i = a.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = a[i];
				a[i] = a[j];
				a[j] = x;
			}
			return a;
		}
	}
};
</script>