<template>
	<div>
		<v-img
			:src="require('@/assets/hotel.jpg')"
			:height="[$vuetify.breakpoint.smAndUp ? '400px' : '200px']"
		>
			<template v-slot:placeholder>
				<v-layout fill-height align-center justify-center ma-0>
					<v-progress-circular indeterminate color="primary"></v-progress-circular>
				</v-layout>
			</template>
		</v-img>
		<v-responsive class="mx-auto" width="56">
			<v-icon x-large>mdi-home</v-icon>
		</v-responsive>
		<h1
			class="primary--text main-title"
			style="text-align: center;"
		>The best hotels in {{$store.state.city}}</h1>
		<h2 class="secondary--text" style="text-align: center;">{{featured.length}} Featured Hotels</h2>

		<v-container grid-list-lg class="my-5">
			<!-- Featured -->
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 v-for="(item, index) in featured" :key="index">
					<CardFeaturedHotel :props="item"></CardFeaturedHotel>
				</v-flex>
			</v-layout>

			<!-- From Booking.com  -->
		</v-container>
		<BookingList :props="booking"></BookingList>
	</div>
</template>

<script>
export default {
	components: {
		BookingList: () => import("@/components/views/BookingList"),

		CardFeaturedHotel: () => import("@/components/CardFeaturedHotel")

		// Assurance: () => import("@/components/Assurance"),
		// Mission: () => import("@/components/Mission")
	},

	async asyncData({ $axios, route, store }) {
		let collection = "hotels";
		let collection2 = "booking_borsh";
		// let collection2 = "booking_borsh";

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
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
				limit: 6
			}
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken +
				"&rspc=1",
			{ fields: { features: 0, rooms: 0 } }
		);
		return {
			featured: request1.data.entries,
			booking: request2.data.entries.reverse()
		};
	},

	head() {
		return {
			title: "Hotels in " + this.$store.state.city,
			meta: [
				{
					hid: "Hotels in " + this.$store.state.city,
					name: "Hotels in " + this.$store.state.city,
					content: "Hotels in " + this.$store.state.city
				}
			]
		};
	}
};
</script>
<style lang="css">
.truncate-overflow {
	--lh: 1.4rem;
	line-height: var(--lh);
	--max-lines: 10;
	position: relative;
	height: calc(var(--lh) * var(--max-lines));
	overflow: hidden;
	padding-right: 1rem; /* space for ellipsis */
}
.truncate-overflow::before {
	position: absolute;
	content: "";
	inset-block-end: 0; /* "bottom" */
	inset-inline-end: 0; /* "right" */
}
.truncate-overflow::after {
	content: "";
	position: absolute;
	inset-inline-end: 0; /* "right" */
	width: 1rem;
	height: 1rem;
	background: white;
}
</style>
