<template>
	<div>
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
			<v-responsive class="mx-auto" width="56">
				<v-icon large>mdi-search-web</v-icon>
			</v-responsive>
			<h2
				class="secondary--text"
				style="text-align: center;"
			>{{booking.length}} results from Booking.com</h2>
			<v-layout row wrap class="my-5">
				<v-flex xs6 sm4 lg3 v-for="(item, index) in booking" :key="index">
					<CardHotel class="hidden-xs-only" :props="item" :index="index"></CardHotel>
					<CardHotelMobile class="hidden-sm-and-up" :props="item" :index="index"></CardHotelMobile>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	components: {
		CardHotelMobile: () => import("@/components/CardHotelMobile"),
		CardFeaturedHotel: () => import("@/components/CardFeaturedHotel"),
		CardHotel: () => import("@/components/CardHotel"),
		Assurance: () => import("@/components/Assurance"),
		Mission: () => import("@/components/Mission")
	},

	async asyncData({ $axios, route, store }) {
		let collection = "hotels";
		let collection2 = "booking_" + store.state.city.toLowerCase();

		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 15 }
		);

		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken
			// { limit: 15 }
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
